## BACKEND

### TODO: 
add docs and instructions for developing & how to get the backend up and running

---

### Building Docker Imager
Building a docker image is possible by running the docker build command inside the backend folder.\
The Dockerfile file is inside the backend folder and is based on Maven using the eclipse temurin tag variant.\
To build the container you will need to provide 3 build arguments. These are:
- **DB_HOST**\
This argument is meant for the host of the database.
This could be an IP or a domain name depending on your setup.
In our RaspberryPi this value will most likely be some kind of reference to the host machine (172.17.0.1 or host.docker.internal for Windows)\
<br>
- **DB_USERNAME**\
This argument is meant for the username of your MySQL user.
This user must have permissions in the company catalogue database already implemented in MySQL.
Make sure this user was created with a host that allows connections from outside of localhost as connecting from a docker container might not work otherwise.\
<br>
- **DB_PASSWORD**\
This argument is meant for the password of your MySQL user.
Make sure to keep this private and do not upload any secrets directly to the repo where they're easily readable and exploitable.
Keep the password used for building the container for deployment in the repository's secrets.

#### Commands
To build the image use the following command:
> docker build . -t &lt;image-name&gt; --build-arg DB_HOST=&lt;database-host&gt; --build-arg DB_USERNAME=&lt;database-username&gt; --build-arg DB_PASSWORD=&lt;database-password&gt;

To run a container using the image you just build use:\
<sub>Default port for the Spring Boot app is 8082, set the target port to whatever you want</sub>
> docker run &lt;image-name&gt; -p 8082:&lt;target-port&gt;