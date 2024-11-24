export const units = [{
    title: "Unit I: Concepts and Basics of C++ Programming",
    youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=0s",
    quizlink: "",
    lessons: [
        { name: "Installing Docker", lessonkey: "install_docker" },
        { name: "Understanding Definitions and Core Concepts", lessonkey: "basic_concepts" },
        { name: "Managing Containers: Running and Stopping", lessonkey: "manage_containers" },
        { name: "Deep Dive into Docker Images", lessonkey: "deep_dive_images" },
        { name: "Interacting with Containers: Using Volumes and Ports", lessonkey: "container_volumes_ports" },
        { name: "Utilizing Tools from the Docker Registry", lessonkey: "docker_registry_tools" },
        { name: "Summary", lessonkey: "lesson1_summary" },
        
    ]
},
{
    title: "Unit II: Advanced Concepts and Techniques",
    youtube: "https://www.youtube.com/watch?v=Zk5e1iQja2A&t=0s",
    quizlink: "",
    lessons: [
        { name: "Migrating to Docker Compose", lessonkey: "migrating_docker_compose" },
        { name: "Docker Networking", lessonkey: "docker_networking" },
        { name: "Volumes in Action", lessonkey: "volumes_in_action" },
        { name: "Containers in Development", lessonkey: "containers_in_dev" },
        { name: "Summary", lessonkey: "lesson2_summary" },

    ]
},
{
    title: "Unit III: Docker in Production",
    youtube: "https://www.youtube.com/watch?v=Zk5e1iQja2A&t=0s",
    quizlink: "",
    lessons: [
        { name: "Introduction to Part 3", lessonkey: "intro_part3" },
        { name: "Official Images and Trust", lessonkey: "official_images_trust" },
        { name: "Deployment Pipelines", lessonkey: "deployment_pipelines" },
        { name: "Using a Non-Root User", lessonkey: "non_root_user" },
        { name: "Optimizing the Image Size", lessonkey: "optimize_image_size" },
        { name: "Multi-Host Environments", lessonkey: "multi_host_env" },
         
        
    ]
},
 
];

export const lessonData = {
    'basic_concepts': {
        title: "Understanding Definitions and Core Concepts",
        description: "Learn the foundational concepts of DevOps and Docker, including the definition of DevOps, the purpose of Docker, and the benefits of containerization in software development.",
        sections: [
            {
                "title": "What is DevOps?",
                 "content": "Before diving into Docker, it's essential to establish the right mindset for understanding DevOps. The term 'DevOps' merges two concepts: Development (Dev), which involves software creation, and Operations (Ops), which handles deployment and maintenance. In simple terms, DevOps means empowering the same team to release, configure, and monitor their software. Jabbari et al. formally define DevOps as 'a development methodology aimed at bridging the gap between Development and Operations, emphasizing communication and collaboration, continuous integration, quality assurance, and delivery with automated deployment utilizing a set of development practices.'",
                 "code": `# DevOps Practices
    - Continuous Integration
    - Automated Testing
    - Continuous Delivery
    - Infrastructure as Code`,
                "images": [
                    {
                        "description": "DevOps toolchain visualization",
                        "path": "https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg"
                    }
                ]
            },
            {
                "title": "What is Docker?",
                "content": "Docker is a set of tools to deliver software in containers. Containers are isolated environments that bundle an application and its dependencies, ensuring it runs seamlessly across different systems.",
                "code": `# Run a Docker container
    docker container run hello-world`,
                "images": [
                    {
                        "description": "Docker container example",
                        "path": "https://example.com/docker-container-image.jpg"
                    }
                ]
            },
            {
                "title": "Benefits of Containers",
                "content": "Containers solve challenges like the 'works on my machine' problem by isolating dependencies and environments. They also support scaling, development flexibility, and efficient resource utilization.",
                "code": `# List all containers
    docker container ls -a`,
                "images": []
            },
            {
                "title": "Scenario: Works on My Machine",
                "content": "Containers address the common 'works on my machine' issue encountered in traditional development pipelines. In scenarios where an application functions correctly during development but fails in production due to environment mismatches, containers ensure that the application and its dependencies remain consistent. By bundling everything required for the application within a container, developers can run the app in any environment reliably.",
                "code": null,
                "images": []
            },
            {
                "title": "Scenario: Isolated Environments",
                "content": "Containers provide isolated environments that allow multiple applications to coexist without conflicts. For instance, if you need to deploy 5 Python applications to a server already running an app dependent on Python 2.7, containers enable each application to package its own dependencies, including different Python versions. This ensures they run independently, avoiding compatibility issues caused by shared environments. Without containers, managing such setups on a single machine can lead to conflicts due to dependency mismatches or system changes, potentially breaking applications.",
                "code": `# Example: Run a container with Python 3.9
            docker run -d python:3.9`,
                "images": []
            },
            {
                "title": "Scenario: Simplifying Development Setup",
                "content": "In a typical development environment, you may need to run a web application alongside various services such as Postgres, MongoDB, Redis, and more. Installing and managing these dependencies manually on your local machine can be tedious and error-prone. Docker simplifies this by allowing you to spin up isolated containers for each service with a single command, making it easier to develop and test applications without system-level conflicts.",
                "code": `# Example: Start a Postgres container
            docker run -d postgres`,
                "images": []
            },
            {
                "title": "Scenario: Simplifying Development Setup",
                "content": "In a typical development environment, you may need to run a web application alongside various services such as Postgres, MongoDB, Redis, and more. Installing and managing these dependencies manually on your local machine can be tedious and error-prone. Docker simplifies this by allowing you to spin up isolated containers for each service with a single command, making it easier to develop and test applications without system-level conflicts.",
                "code": `# Example: Start a Postgres container
            docker run -d postgres`,
                "images": []
            },
            
            {
                "title": "Virtual Machines vs Containers",
                "content": "While Virtual Machines (VMs) and Containers may seem similar, they address different challenges. VMs emulate an entire operating system, providing full isolation but with significant resource overhead. In contrast, containers share the host OS kernel, making them lightweight and more efficient. For instance, when moving an application from one operating system (e.g., Linux) to another incompatible one (e.g., Windows), containers can run software almost as efficiently as running it natively, unlike VMs which add extra layers of complexity. However, since Docker relies on Linux kernels, running it on Mac or Windows requires additional tools and configurations.",
                "code": null,
                "images": [
                    {
                        "description": "Diagram comparing Virtual Machines and Containers",
                        "path": "https://example.com/vm-vs-container-diagram.jpg"
                    }
                ]
            },
            {
                "title": "Running Containers",
                "content": "Once Docker is installed, you can verify your setup by running your first container using the `hello-world` image. This image is a simple application that outputs a welcome message and confirms that Docker is working correctly. When you execute the command `docker container run hello-world`, Docker performs several actions:\n\n1. The Docker client contacts the Docker daemon.\n2. The Docker daemon pulls the 'hello-world' image from Docker Hub if it's not already available locally.\n3. The Docker daemon creates a new container from the image.\n4. The container runs the executable and streams the output back to your terminal.\n\nIf you’ve already run the `hello-world` container before, Docker skips the download step and runs the container immediately. For convenience, you can also use the shorthand `docker run hello-world` instead of the full command.",
                "code": `# Run the hello-world container
            $ docker container run hello-world
              Unable to find image 'hello-world:latest' locally
              latest: Pulling from library/hello-world
              b8dfde127a29: Pull complete
              Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
              Status: Downloaded newer image for hello-world:latest
            
              Hello from Docker!
              This message shows that your installation appears to be working correctly.
            
              To generate this message, Docker took the following steps:
               1. The Docker client contacted the Docker daemon.
               2. The Docker daemon pulled the 'hello-world' image from the Docker Hub.
                  (amd64)
               3. The Docker daemon created a new container from that image which runs the
                  executable that produces the output you are currently reading.
               4. The Docker daemon streamed that output to the Docker client, which sent it
                  to your terminal.
            
            # Try running an Ubuntu container for an interactive experience
            $ docker run -it ubuntu bash
            
            # More examples and ideas are available at:
            # https://docs.docker.com/get-started/
            `
            },
            {
                "title": "Images and Containers",
                "content": "To understand Docker images and containers, it's helpful to think of them as related but distinct concepts. Containers are instances of images, and a common mistake is to confuse the two. Using a cooking metaphor, consider an image as a recipe that contains all the instructions and ingredients needed to prepare a meal. A container, on the other hand, is the ready-to-eat meal created from that recipe. Similarly, a Docker image contains all the dependencies and instructions required to create a container, while the container is the running instance of that image. In essence, an image is a blueprint, and a container is the live, functioning product of that blueprint.",
                "code": null,
                "images": []
            },

            {
                "title": "Understanding Docker Images",
                "content": "A Docker image is a file that serves as a template for creating containers. Docker images are immutable, meaning they cannot be changed once created. Instead, new images are built by starting from a base image and adding layers to it. This immutability ensures consistency and reliability. Containers are created from these images. For instance, when you run the `hello-world` container twice, Docker downloads the image once and creates multiple containers from the same image. But where do these images come from? Images are built from an instructional file called a Dockerfile. The Dockerfile contains commands and configurations that Docker parses when you run the `docker image build` command to create the image.",
                "code": `# List all Docker images
            $ docker image ls
              REPOSITORY      TAG      IMAGE ID       CREATED         SIZE
              hello-world     latest   d1165f221234   9 days ago      13.3kB
            
            # Example of a Dockerfile used to create an image
            FROM ubuntu:latest
            RUN apt-get update && apt-get install -y nginx
            CMD ["nginx", "-g", "daemon off;"]`,
                "images": []
            },
            {
                "title": "Understanding Dockerfiles",
                "content": "A Dockerfile is an instructional file used to build Docker images. It acts as the recipe for creating an image, containing commands and configurations that Docker executes to assemble the image. Using the cooking metaphor, the Dockerfile is like the recipe for an image, while the image itself is the recipe for creating a container. The key difference is that the Dockerfile is written by us, whereas the image is automatically generated by Docker based on the instructions in the Dockerfile. As we progress, we will explore how to write and use Dockerfiles to build custom images.",
                "code": `# Example Dockerfile structure
            FROM <image>:<tag>
            RUN <install some dependencies>
            CMD <command that is executed on \`docker container run\`>`,
                "images": []
            },
            {
                "title": "Working with Containers",
                "content": "Containers are lightweight, isolated environments that contain everything required to execute an application. They allow you to start, stop, and interact with applications while maintaining isolation on the host machine. Containers can also communicate with each other or the host system using defined methods like TCP/UDP. To manage containers, Docker provides commands to list, inspect, and interact with them. By default, the `docker container ls` command lists only running containers, but adding the `-a` flag includes all containers, including those that have exited.",
                "code": `# List all running containers
            $ docker container ls
              CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
            
            # List all containers, including stopped ones
            $ docker container ls -a
              CONTAINER ID   IMAGE           COMMAND      CREATED          STATUS                      PORTS     NAMES
              b7a53260b513   hello-world     "/hello"     5 minutes ago    Exited (0) 5 minutes ago              brave_bhabha
              1cd4cb01482d   hello-world     "/hello"     8 minutes ago    Exited (0) 8 minutes ago              vibrant_bell
            
            # Shorter form for listing containers
            $ docker ps`,
                "images": []
            },

            {
                "title": "Understanding Docker CLI Basics",
                "content": "The Docker CLI interacts with the Docker Engine, which consists of three components: the CLI, a REST API, and the Docker daemon. When you execute a command like `docker container run`, the CLI sends a request to the daemon via the REST API. The daemon manages images, containers, and other resources. While Docker has over 50 commands, only a handful are commonly used, such as `docker container run`, which creates a container from an image and downloads the image if not already available.",
                "code": `# Example of running a container
            $ docker container run hello-world`,
                "images": []
            },            
            {
                "title": "Managing Docker Containers and Images",
                "content": "To manage Docker containers and images effectively, you need to understand key commands:\n\n1. **List Containers**: Use `docker container ls` to see running containers and `docker container ls -a` to include stopped ones.\n2. **Remove Containers**: Containers can be removed using `docker container rm <container_name_or_id>`. You can also use `docker container prune` to remove all stopped containers.\n3. **Remove Images**: Use `docker image rm <image_name>` to delete an image. If the image is in use by a container, it must be removed first.\n4. **Prune Unused Resources**: Use `docker image prune` to remove dangling images or `docker system prune` to clear unused containers, networks, and images.\n\nTo avoid blocking input, run containers in detached mode using the `-d` flag. For example, running `docker run -d nginx` starts the container in the background. Containers can be stopped with `docker container stop <name_or_id>` before removal.",
                "code": `# List all containers, including stopped ones
            $ docker container ls -a
            
            # Remove a specific container
            $ docker container rm <container_id_or_name>
            
            # Remove dangling images
            $ docker image prune
            
            # Run a container in detached mode
            $ docker run -d nginx
            
            # Stop a running container
            $ docker container stop <container_id_or_name>`,
                "images": []
            },            

            
            
        ],
        practiceQuestions: [
            {
                question: "Start 3 containers from the 'nginx' image in detached mode. Stop two of the containers and leave one running.",
                hint: "Use the `docker run -d` command to start containers in detached mode. Use `docker container stop` to stop specific containers.",
                solution: `# Start 3 containers in detached mode
        docker run -d nginx
        docker run -d nginx
        docker run -d nginx
        
        # Stop two containers
        docker container stop <container_id_1>
        docker container stop <container_id_2>
        
        # Verify the result
        docker ps -a`
            },
            {
                question: "Clean up the Docker environment by removing all unused containers and images.",
                hint: "Use the `docker container prune` and `docker system prune` commands.",
                solution: `# Remove all stopped containers
        docker container prune
        
        # Remove unused images, containers, and other resources
        docker system prune
        
        # Verify the cleanup
        docker ps -a
        docker image ls`
            }
        ]
        
    }
};
