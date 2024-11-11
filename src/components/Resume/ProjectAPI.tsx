export const ProjectsAPI = [
  {
    id: 0,
    title: "PERSONAL PORTFOLIO",
    description:
      "This project was thoughtfully created to not only demonstrate the skills I have acquired but also to showcase a selection of significant projects that I have had the privilege of working on in the past. Each project reflects my dedication to delivering high-quality work and my continuous growth in the field.",
    image: "/images/Project/portfolio/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/react.png",
        alt: "React",
        title: "React",
      },
      {
        src: "/images/SkillSet/vite.svg",
        alt: "Vite",
        title: "Vite",
      },
      {
        src: "/images/SkillSet/typescript.svg",
        alt: "TypeScript",
        title: "TypeScript",
      },
      {
        src: "/images/SkillSet/tailwind.svg",
        alt: "Tailwind",
        title: "Tailwind",
      },
    ],
    source: "https://github.com/phamanhdung1813/stanleypham_portfolio_app",
    visit: "https://stanleypham.com",
  },
  {
    id: 1,
    title: "SPRING SECURITY JWT TOKEN",
    description:
      "This project was built using Maven and Java 11 JDK. Throughout this project, I gained experience in creating a backend system that implements token-based authentication and authorization on the server. Additionally, I utilized MySQL as the relational database to manage user roles and permissions. To ensure robust security, I implemented various security technologies, including protection against HTTP penetration attacks like CSRF, as well as the use of JWT tokens and RSA keys for secure data transmission.",
    image: "/images/Project/spring_boot_security_backend/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/maven.png",
        alt: "Maven",
        title: "Maven",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
      {
        src: "/images/SkillSet/springsecurity.svg",
        alt: "Spring Security",
        title: "Spring Security",
      },
      {
        src: "/images/SkillSet/mysql.png",
        alt: "MySQL",
        title: "MySQL",
      },
    ],
    source: "https://github.com/phamanhdung1813/spring_boot_security_backend",
    visit: "https://github.com/phamanhdung1813/spring_boot_security_backend",
  },
  {
    id: 2,
    title: "SPRING CLOUD MICROSERVICES DOCKER AND KUBERNETES",
    description:
      "In this project, we will develop microservices that communicate with each other using Java Spring Cloud. We will then create Maven Jib profiles to automate the process of pushing all images to a Docker registry. Following that, we will demonstrate the application by configuring Spring Profiles, setting up Kubernetes Cluster YAML files, and showcasing how data is distributed to visualize the transfer between the microservices",
    image: "/images/Project/k8s-springboot-cloud-microservices/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
      {
        src: "/images/SkillSet/springcloud.svg",
        alt: "Spring Cloud",
        title: "Spring Cloud",
      },
      {
        src: "/images/SkillSet/kubernetes.svg",
        alt: "Kubernetes",
        title: "Kubernetes",
      },
      {
        src: "/images/SkillSet/docker.svg",
        alt: "Docker",
        title: "Docker",
      },
      {
        src: "/images/SkillSet/rabbitmq.svg",
        alt: "RabbitMQ",
        title: "RabbitMQ",
      },
    ],
    source:
      "https://github.com/phamanhdung1813/k8s-springboot-cloud-microservices",
    visit:
      "https://github.com/phamanhdung1813/k8s-springboot-cloud-microservices",
  },
  {
    id: 3,
    title: "OAUTH2 SPRING SECURITY",
    description:
      "This project was developed using Spring Security OAuth2 with Java 11 JDK. Throughout the project, I learned how to implement the PKCE (Proof Key for Code Exchange) to enhance the OAuth 2.0 Authorization Code flow. I also worked with OpenID Connect for secure server communication and configured the Token Endpoint to support JWT token certification using asymmetric encryption (PFX). Additionally, I utilized SHA256 encryption to secure the backend token exchange process.",
    image: "/images/Project/oauth2-spring-security-authserver/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
      {
        src: "/images/SkillSet/springsecurity.svg",
        alt: "Spring Security",
        title: "Spring Security",
      },
      {
        src: "/images/SkillSet/openid.png",
        alt: "OpenID",
        title: "OpenID",
      },
      {
        src: "/images/SkillSet/oauth2.png",
        alt: "OAuth 2.0",
        title: "OAuth 2.0",
      },
    ],
    source:
      "https://github.com/phamanhdung1813/oauth2-spring-security-authserver",
    visit:
      "https://github.com/phamanhdung1813/oauth2-spring-security-authserver",
  },
  {
    id: 4,
    title: "SPRINGBOOT REACTJS WEBSOCKET",
    description:
      "Websocket is a protocol that supports two-way communication between the client and the server to create a data exchange connection. This project demo shortly real-time chatting conversation by using StompClient and SockJS library, Backend server on this project was build in Java Spring Boot and client side was built on ReactJs.",
    image: "/images/Project/springboot-reactjs-websocket/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/react.png",
        alt: "React",
        title: "React",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
    ],
    source: "https://github.com/phamanhdung1813/springboot-reactjs-websocket",
    visit: "https://github.com/phamanhdung1813/springboot-reactjs-websocket",
  },
  {
    id: 5,
    title: "HOXTON CLOUD OAUTH2 SERVER",
    description:
      "This project was built using Java 11 JDK with Spring Boot and Hoxton Cloud. Throughout the project, I gained hands-on experience in transferring security tokens between the resource server and the authorization server. I also configured the token enhancer and token endpoint. The JWT tokens generated in this project were secured with an asymmetric key stored in a JKS (Java Key Store). On the resource server, the tokens were parsed using public key access for validation, ensuring secure communication and token integrity.",
    image: "/images/Project/hoxton-oauth2-authserver/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
      {
        src: "/images/SkillSet/springsecurity.svg",
        alt: "Spring Security",
        title: "Spring Security",
      },
      {
        src: "/images/SkillSet/openid.png",
        alt: "OpenID",
        title: "OpenID",
      },
      {
        src: "/images/SkillSet/oauth2.png",
        alt: "OAuth 2.0",
        title: "OAuth 2.0",
      },
    ],
    source: "https://github.com/phamanhdung1813/hoxton-oauth2-authserver",
    visit: "https://github.com/phamanhdung1813/hoxton-oauth2-authserver",
  },
  {
    id: 6,
    title: "DOCKER JENKINS AUTOMATE MAVEN PROJECT",
    description:
      "This project was developed using OpenJDK 8 and utilizes Jenkins for Continuous Integration (CI). Jenkins automatically interacts with Docker Hub to streamline the build and deployment process. When changes are committed to the GitHub repository, Jenkins triggers the Maven build process, updates the (.jar) file, and pushes the tagged file to the Docker Hub, ensuring seamless integration and deployment.",
    image: "/images/Project/docker-jenkins-springboot/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/git.png",
        alt: "Git",
        title: "Git",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
      {
        src: "/images/SkillSet/jenkins.svg",
        alt: "Jenkins",
        title: "Jenkins",
      },
      {
        src: "/images/SkillSet/docker.svg",
        alt: "Docker",
        title: "Docker",
      },
    ],
    source: "https://github.com/phamanhdung1813/docker-jenkins-springboot",
    visit: "https://www.youtube.com/watch?v=lhRTevTtpLs",
  },
  {
    id: 7,
    title: "OAUTH2 RESOURCE SERVER",
    description:
      "This project builds upon the core backend security of the 'Hoxton Cloud OAuth2 Server' project. In this project, I gained experience in transferring OAuth2 tokens between the Authorization Server and the Resource Server. Additionally, I used JSON arrays and a JWT decoder to verify the JWT tokens issued by the Authorization Server, ensuring secure and authorized access to resources.",
    image: "/images/Project/hoxton-oauth2-resourceserver/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
      {
        src: "/images/SkillSet/springsecurity.svg",
        alt: "Spring Security",
        title: "Spring Security",
      },
      {
        src: "/images/SkillSet/mysql.png",
        alt: "MySQL",
        title: "MySQL",
      },
      {
        src: "/images/SkillSet/oauth2.png",
        alt: "OAuth 2.0",
        title: "OAuth 2.0",
      },
    ],
    source: "https://github.com/phamanhdung1813/hoxton-oauth2-resourceserver",
    visit: "https://github.com/phamanhdung1813/hoxton-oauth2-resourceserver",
  },
  {
    id: 8,
    title: "SPRING BOOT SDK AWS S3",
    description:
      "This project was built using Maven with Java JDK 11. In this project, I learned how to integrate a Spring Boot application with Amazon AWS S3 to enable file storage. The application allows users to upload files to a specific S3 bucket profile without the need to log into an AWS account. Additionally, users can download and delete files from the bucket, utilizing the AWS Java SDK (aws-java-sdk) for seamless interaction with AWS services.",
    image: "/images/Project/springboot-aws-s3/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/aws.png",
        alt: "AWS",
        title: "AWS",
      },
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/maven.png",
        alt: "Maven",
        title: "Maven",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
    ],
    source: "https://github.com/phamanhdung1813/springboot-aws-s3",
    visit: "https://github.com/phamanhdung1813/springboot-aws-s3",
  },
  {
    id: 9,
    title: "K8S WITH SPRING BOOT JPA",
    description:
      "In this project, I will establish a connection between Docker images for a Spring Boot (.jar) application and MySQL images using Kubernetes with the Minikube service. This setup will enable seamless interaction between the two containers, ensuring efficient deployment and management in a local Kubernetes environment.",
    image: "/images/Project/k8s-docker-springboot/avatar.png",
    technologies: [
      {
        src: "/images/SkillSet/kubernetes.svg",
        alt: "Kubernetes",
        title: "Kubernetes",
      },
      {
        src: "/images/SkillSet/docker.svg",
        alt: "Docker",
        title: "Docker",
      },
      {
        src: "/images/SkillSet/java.svg",
        alt: "Java",
        title: "Java",
      },
      {
        src: "/images/SkillSet/springboot.svg",
        alt: "Spring Boot",
        title: "Spring Boot",
      },
    ],
    source: "https://github.com/phamanhdung1813/k8s-docker-springboot",
    visit: "https://github.com/phamanhdung1813/k8s-docker-springboot",
  },
  {
    id: 10,
    title: "UI REACT FOR SPRING SECURITY",
    description:
      "This project was built using ReactJS and leverages the core backend security of the 'Spring Security JWT Token' framework. Through this project, I learned how to use server-issued tokens for secure storage within ReactJS, and how to configure proper user roles and authorities, allowing controlled access and data modification based on user permissions.",
    image: "/images/Project/ui-spring-reactjs/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/react.png",
        alt: "ReactJS",
        title: "ReactJS",
      },
      {
        src: "/images/SkillSet/javascript.svg",
        alt: "JavaScript",
        title: "JavaScript",
      },
      {
        src: "/images/SkillSet/bootstrap.svg",
        alt: "Bootstrap",
        title: "Bootstrap",
      },
    ],
    source: "https://github.com/phamanhdung1813/ui_spring_reactjs",
    visit: "https://github.com/phamanhdung1813/ui_spring_reactjs",
  },
  {
    id: 11,
    title: "AZURE IPTABLES ANALYSIS IN LINUX",
    description:
      "This project utilized Azure Cloud with SSH connections between Windows Server VMs. Through this project, I gained experience analyzing IP table security rules on the CentOS platform and implementing these security rules on Windows Server. Additionally, I used TCPDUMP to capture and analyze TCP packet logs, gaining insights into the precise routing of packets across the VM infrastructure.",
    image: "/images/Project/azure_security_iptables_analysis/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/azure.png",
        alt: "Azure Cloud",
        title: "Azure Cloud",
      },
      {
        src: "/images/SkillSet/iptables.jpg",
        alt: "IP Tables",
        title: "IP Tables",
      },
      {
        src: "/images/SkillSet/centos.png",
        alt: "CentOS",
        title: "CentOS",
      },
      {
        src: "/images/SkillSet/window.webp",
        alt: "Windows Server",
        title: "Windows Server",
      },
      {
        src: "/images/SkillSet/ssh.png",
        alt: "SSH",
        title: "SSH",
      },
    ],
    source:
      "https://github.com/phamanhdung1813/azure_security_iptables_analysis",
    visit:
      "https://github.com/phamanhdung1813/azure_security_iptables_analysis",
  },
  {
    title: "MULTIPLE LOGIN ACTIVE DIRECTORY",
    description:
      "This project utilized CentOS and Windows Server platforms. Through this project, I gained experience using OpenLDAP to manage client-server data storage, configuring DNS on Windows Server to enable data access with Kerberos authentication, and managing permissions through Kerberos configuration and LDIF files.",
    image: "/images/Project/multiple_login_active_directory/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/ldap.svg",
        alt: "OpenLDAP",
        title: "OpenLDAP",
      },
      {
        src: "/images/SkillSet/kerberos.png",
        alt: "Kerberos",
        title: "Kerberos",
      },
      {
        src: "/images/SkillSet/centos.png",
        alt: "CentOS",
        title: "CentOS",
      },
      {
        src: "/images/SkillSet/window.webp",
        alt: "Windows Server",
        title: "Windows Server",
      },
    ],
    source:
      "https://github.com/phamanhdung1813/multiple_login_active_directory",
    visit: "https://github.com/phamanhdung1813/multiple_login_active_directory",
    id: 12,
  },
  {
    id: 13,
    title: "DATA BACKUP SLAVE SQL",
    description:
      "This project was developed using CentOS 8 and Windows Server platforms. Through this project, I gained experience configuring a slave database using MariaDB as the primary database, with MySQL 8x on Windows Server set up for slave replication and data backup via VPN access. Additionally, I automated services using Bash scripting with CRONTAB, ensuring regular SQL backups, which were then compressed into (.gz) files for efficient storage.",
    image: "/images/Project/data_backup_slave_sql/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/mariadb.png",
        alt: "MariaDB",
        title: "MariaDB",
      },
      {
        src: "/images/SkillSet/mysql.png",
        alt: "MySQL",
        title: "MySQL",
      },
      {
        src: "/images/SkillSet/centos.png",
        alt: "CentOS",
        title: "CentOS",
      },
      {
        src: "/images/SkillSet/window.webp",
        alt: "Windows Server",
        title: "Windows Server",
      },
      {
        src: "/images/SkillSet/bash.png",
        alt: "Bash",
        title: "Bash",
      },
    ],
    source: "https://github.com/phamanhdung1813/data_backup_slave_sql",
    visit: "https://github.com/phamanhdung1813/data_backup_slave_sql",
  },
  {
    id: 14,
    title: "OPEN VPN TUNNEL",
    description:
      "In this project, I used CentOS as a router to connect with Ubuntu as a client, configuring a VPN architecture to establish a secure connection with another router hosted on an Azure machine. Additionally, I gained experience setting up Web IIS and DNS services to define routing paths for each IP address. I also configured an FTP server on Windows OS to enable file storage and secure file transfers between machines.",
    image: "/images/Project/open_vpn_and_vpn_tunnel/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/vpn.png",
        alt: "VPN",
        title: "VPN",
      },
      {
        src: "/images/SkillSet/centos.png",
        alt: "CentOS",
        title: "CentOS",
      },
      {
        src: "/images/SkillSet/window.webp",
        alt: "Windows",
        title: "Windows",
      },
      {
        src: "/images/SkillSet/ubuntu.png",
        alt: "Ubuntu",
        title: "Ubuntu",
      },
      {
        src: "/images/SkillSet/ftp.png",
        alt: "FTP",
        title: "FTP",
      },
    ],
    source: "https://github.com/phamanhdung1813/open_vpn_and_vpn_tunnel",
    visit: "https://github.com/phamanhdung1813/open_vpn_and_vpn_tunnel",
  },
  {
    title: "MAIL SERVER DATABASE ADMIN",
    description:
      "In this project, I utilized Postfix, Dovecot, and MariaDB to set up a mail server and database server, with an SSH connection between the systems. I configured the mail server and database server on a CentOS machine and established iptables rules to allow secure communication with a Windows Server. To test the mail service, I used Mozilla Thunderbird. This project provides a solution for small businesses in need of a reliable mail server and database server to store their data.",
    image: "/images/Project/mail_server_database_admin/avatar.PNG",
    technologies: [
      {
        src: "/images/SkillSet/mariadb.png",
        alt: "MariaDB",
        title: "MariaDB",
      },
      {
        src: "/images/SkillSet/mysql.png",
        alt: "MySQL",
        title: "MySQL",
      },
      {
        src: "/images/SkillSet/postfix.png",
        alt: "Postfix",
        title: "Postfix",
      },
      {
        src: "/images/SkillSet/dovecot.png",
        alt: "Dovecot",
        title: "Dovecot",
      },
      {
        src: "/images/SkillSet/thunderbird.png",
        alt: "Mozilla Thunderbird",
        title: "Mozilla Thunderbird",
      },
    ],
    source: "https://github.com/phamanhdung1813/mail_server_database_admin",
    visit: "https://github.com/phamanhdung1813/mail_server_database_admin",
    id: 15,
  },
];
