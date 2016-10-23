wish
[![wercker status](https://app.wercker.com/status/56ccfe87d0f58f21790485fb00f0582c/s/master "wercker status")](https://app.wercker.com/project/byKey/56ccfe87d0f58f21790485fb00f0582c)
====
Share your wishes.
----
Requirments:
- Google auth api key for web application - Client ID for Web application: https://console.developers.google.com/apis/credentials
  - Authorized JavaScript origins: http://<host>:<port>
  - Authorized redirect URIs: http://<host>:<port>/auth/google
- Openshift DIY app with PostgreSQL DB
- OR other computer with Java 8 and PostgreSQL DB

Build:
- npm install -g bower
- bower update
- mvn spring-boot:run
