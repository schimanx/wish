package cz.schiman.wish.conf;

import cz.schiman.wish.dao.UsersDao;
import cz.schiman.wish.services.AccountConnectionSignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.config.annotation.SocialConfigurerAdapter;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.jdbc.JdbcUsersConnectionRepository;
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.security.AuthenticationNameUserIdSource;

import javax.sql.DataSource;

/**
 * Social config
 */
@Configuration
@EnableSocial
public class SocialConfig extends SocialConfigurerAdapter {

  private final DataSource dataSource;

  private final UsersDao usersDao;

  @Autowired
  public SocialConfig(DataSource dataSource, UsersDao usersDao) {
    this.dataSource = dataSource;
    this.usersDao = usersDao;
  }

  @Override
  public void addConnectionFactories(ConnectionFactoryConfigurer connectionFactoryConfigurer, Environment environment) {
    connectionFactoryConfigurer.addConnectionFactory(new GoogleConnectionFactory(
        environment.getProperty("spring.social.google.appId"),
        environment.getProperty("spring.social.google.appSecret")));
  }

  @Override
  public UserIdSource getUserIdSource() {
    return new AuthenticationNameUserIdSource();
  }

  @Override
  public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
    JdbcUsersConnectionRepository repository = new JdbcUsersConnectionRepository(dataSource, connectionFactoryLocator, Encryptors.noOpText());
    repository.setConnectionSignUp(new AccountConnectionSignUpService(usersDao));
    return repository;
  }
}
