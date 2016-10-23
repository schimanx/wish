wish
[![Build Status](https://travis-ci.org/schimanx/wish.svg?branch=master)](https://travis-ci.org/schimanx/wish)
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
