# links
- https://github.com/aerokube/selenoid
- https://github.com/alexschwantes/testcafe-browser-provider-selenium
- webdriver
  - https://w3c.github.io/webdriver/
  - https://w3c.github.io/webdriver/#protocol-extensions

# how to get started
1. `docker-compose up`
   1. http://localhost:8081/ the selenoid-ui
   1. http://localhost:4444/wd/hub selenium test endpoint
   1. http://localhost:4444/status selenoid status
   1. http://localhost:4444/video/ list recorded videos
   1. http://localhost:4444/logs/ list logs
1. download the browser images you want to use. This has to be in sync with the images configured in `browsers.json`
   1. `docker pull selenoid/vnc:chrome_83.0` ([hub](https://hub.docker.com/r/selenoid/vnc_chrome))
   1. `docker pull selenoid/vnc:firefox_77.0` ([hub](https://hub.docker.com/r/selenoid/vnc_firefox))
1. `yarn start` to run the web application
1. `yarn testcafe:run:selenoid` 

# vnc
- adjust `selenoid/capabilities.json` on a per browser level (you can override on a browser version level)
- override the default location in `package.json` script
- `yarn testcafe:run:selenoid` 

# [video recording](https://aerokube.com/selenoid/latest/#_video_recording)
- docker pull selenoid/video-recorder:latest-release ([hub](https://hub.docker.com/r/selenoid/video-recorder))

# other images
- https://hub.docker.com/r/aerokube/selenoid or the alias https://hub.docker.com/r/selenoid/hub/tags
- https://hub.docker.com/r/aerokube/selenoid-ui/
