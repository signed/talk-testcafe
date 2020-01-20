# how to get started
1. `docker-compose up`
   1. http://localhost:8081/ the selenoid-ui
   1. http://localhost:4444/wd/hub selenium test endpoint
   1. http://localhost:4444/status selenoid status
   1. http://localhost:4444/video/ list recorded videos
   1. http://localhost:4444/logs/ list logs
1. download the browser images you want to use. This has to be in sync with the images configured in `browsers.json`
   1. `docker pull selenoid/vnc:chrome_79.0` 
   1. `docker pull selenoid/vnc:firefox_72.0` 
1. `yarn testcafe:run:selenoid` 

# [video recording](https://aerokube.com/selenoid/latest/#_video_recording)
- docker pull selenoid/video-recorder:latest-release

# images
- https://hub.docker.com/r/selenoid/vnc_firefox/tags
- https://hub.docker.com/r/selenoid/vnc_chrome/tags
