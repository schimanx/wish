package cz.schiman.wish.conf;

import cz.schiman.wish.services.SimpleSocialUsersDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.social.security.SocialUserDetailsService;
import org.springframework.social.security.SpringSocialConfigurer;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
@Order(SecurityProperties.BASIC_AUTH_ORDER)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  private final DataSource dataSource;

  @Autowired
  public WebSecurityConfig(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
        .authorizeRequests()
        .antMatchers("/lib/**", "/css/**", "/images/**", "/js/**").permitAll()
        .anyRequest().authenticated()
        .and()
        .formLogin()
        .loginPage("/login")
        .loginProcessingUrl("/login/authenticate")
        .failureUrl("/login?param.error=bad_credentials")
        .permitAll()
        .and()
        .rememberMe()
        .and()
        .apply(new SpringSocialConfigurer()
                   .postLoginUrl("/")
                   .alwaysUsePostLoginUrl(true))
        .and()
        .logout()
        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
        .deleteCookies("JSESSIONID")
        .logoutSuccessUrl("/login").permitAll();
  }

  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    auth.jdbcAuthentication()
        .dataSource(dataSource)
        .withDefaultSchema();
  }

  @Bean
  public SocialUserDetailsService socialUsersDetailService() {
    return new SimpleSocialUsersDetailService(userDetailsService());
  }
}
