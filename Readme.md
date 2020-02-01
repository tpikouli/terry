# ANZ Engineer Test nodejs application with docker Conatiner

# Installation

1) Clone nodejs application with git clone
	https://github.com/anz-ecp/terry-pikoulis.git
    
   
2) Building docker image

    docker build -t terry_api_test:latest .


3) Running docker container

        docker run -it -d -p 9002:9005 terry_api_test:latest . 

4) Call API
				http://localhost:9002/info
				
#Design decision
1) Node.js has a built-in HTTP module, for the purposes of ANZ API test this offered a  lightweight implementation allowing for use of framework Nodejs Express API methods. Note: Standard HHTP 80 ports have been used
2) A minimal Docker image based on Alpine Linux was used, again for lightweight implementation, less packages, smaller footprint, also better security. 



