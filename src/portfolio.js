/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sumit Tanpure",
  title: "Hi. I'm Sumit.",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web  applications with Python / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dR2p53ggXGcfIS9q4GfADGgbZlsG1o4A/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sumittanpure",
  linkedin: "https://www.linkedin.com/in/sumit-tanpure-267755168/",
  gmail: "sumittanpure8@gmail.com",
  gitlab: "https://gitlab.com/sumittanpure",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do?",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Developed highly complex event driven applications."
    ),
    emoji("⚡Developed and Re-Designed Cloud Infra for IoT Devices"),
    emoji(
      "⚡ Basically have work Experience in everything that you can see above!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname:
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="python">
          <path d="M18.231 7.357h.001v-.004z"></path><path fill="#F2BB30" d="M20.699 17.748c1.666 0 2.282-1.162 2.861-2.904.6-1.794.574-3.52 0-5.818-.413-1.655-1.194-2.904-2.861-2.904h-2.147v2.541c0 1.971-1.672 3.632-3.578 3.632H9.252c-1.565 0-2.861 1.339-2.861 2.909v5.454c0 1.553 1.35 2.464 2.861 2.909 1.81.53 3.552.626 5.721 0 1.441-.418 2.861-1.26 2.861-2.909v-2.181h-5.717v-.728h8.582zm-5.367 2.181c.594 0 1.077.488 1.077 1.088 0 .606-.482 1.093-1.077 1.093a1.09 1.09 0 0 1-1.077-1.093 1.088 1.088 0 0 1 1.077-1.088z"></path><path fill="#35668F" d="M3.444 17.749H5.41v-2.615c0-1.891 1.634-3.558 3.578-3.558h5.721c1.591 0 2.861-1.312 2.861-2.909V3.209c0-1.553-1.307-2.717-2.861-2.978-1.918-.317-4.002-.299-5.721.006l.001-.001c-2.422.428-2.86 1.322-2.86 2.977v2.181h5.727v.729H3.98C2.314 6.123.856 7.125.402 9.027c-.525 2.181-.546 3.541 0 5.818.406 1.693 1.377 2.904 3.042 2.904zM8.63 3.937a1.084 1.084 0 0 1-1.077-1.088A1.089 1.089 0 0 1 8.63 1.756c.59 0 1.077.492 1.077 1.093S9.225 3.937 8.63 3.937z">
          </path>
        </svg>
    },
    {
      skillName: "Postgres",
      fontAwesomeClassname:
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" id="postgresql">
          <path fill="#32648D" d="m18.991 14.727.002.002v.001l-.003.001c-.145.053-.265.075-.366.12a.448.448 0 0 0-.235.212l-.001.002c-.062.115-.116.319-.1.666.041.03.091.053.142.069l.004.001c.169.052.452.086.768.081.63-.007 1.406-.156 1.818-.35.355-.169.659-.373.93-.615-1.376.288-2.153.211-2.63.012a1.326 1.326 0 0 1-.329-.202zM17.58 4.151l.006.009.007.008zM12.317 19.299l-.001-.076-.001-.027.002.103zm-1.055-4.413a.643.643 0 0 0-.199-.06h-.003v-.002h-.021c-.052.005-.128.023-.276.188-.344.39-.464.635-.748.864-.284.228-.652.35-1.388.503a1.862 1.862 0 0 0-.455.144c.029.024.026.03.069.053.108.06.246.113.358.142.316.08.836.173 1.378.08.542-.094 1.106-.357 1.587-1.04.083-.118.092-.292.024-.479s-.22-.348-.326-.393zM15.3 1.502l-.057.011.059-.01-.002-.001zM18.082 6.9c-.671.009-1.047.184-1.245.413-.28.325-.306.895-.132 1.597.173.703.53 1.489.866 2.142.168.327.331.621.462.86.132.24.229.41.288.555.054.134.115.252.176.362.26-.555.306-1.1.28-1.668-.034-.703-.196-1.422-.172-2.15.027-.851.193-1.405.207-2.063a5.5 5.5 0 0 0-.73-.048zm.124.506-.001.008v.01c0 .046-.013.09-.036.126l.001-.001a.672.672 0 0 1-.109.15.66.66 0 0 1-.377.211l-.004.001a.576.576 0 0 1-.407-.104l.002.001a.593.593 0 0 1-.127-.117l-.001-.001a.26.26 0 0 1-.062-.125v-.002l-.001-.015c0-.043.016-.083.043-.113a.367.367 0 0 1 .114-.089l.002-.001c.095-.054.223-.094.368-.116a1.26 1.26 0 0 1 .158-.013v.003h.049a.866.866 0 0 1 .178.022.4.4 0 0 1 .136.055.172.172 0 0 1 .074.11zM7.077 11.307c0-.18.014-.356.04-.529l-.002.019c.102-.739.116-1.43.104-1.976-.012-.532-.05-.886-.05-1.107V7.69l-.001-.006v-.006c0-1.184.208-2.319.585-3.372.277-.744.689-1.499 1.306-2.111-.607-.202-1.683-.51-2.849-.568a7.163 7.163 0 0 0-.374-.01h-.001v.001c-.125 0-.251.004-.375.011-.998.058-1.942.351-2.616 1.075-.676.724-1.121 1.911-1.024 3.876.019.372.179 1.414.453 2.652.275 1.238.662 2.695 1.128 3.982.467 1.287 1.033 2.407 1.571 2.937.271.265.506.372.719.363.214-.01.472-.135.787-.518a43.036 43.036 0 0 1 1.808-2.069l-.02.021a3.511 3.511 0 0 1-1.189-2.641z"></path><path fill="#32648D" d="M12.396 1.568v-.002c-1.168.003-2.005.36-2.641.895-.655.553-1.094 1.31-1.383 2.085-.343.92-.46 1.81-.507 2.414l.013-.008c.353-.2.816-.4 1.312-.516.496-.116 1.03-.151 1.514.039s.884.637 1.029 1.315c.695 3.257-.216 4.468-.552 5.382a8.477 8.477 0 0 0-.311.946l-.016.067c.042-.01.085-.022.127-.026.237-.02.423.06.533.108.338.142.57.44.695.78.033.089.056.185.07.284.013.034.02.074.02.115v.012a53.826 53.826 0 0 0 .014 3.765c.023.526.056.992.097 1.359.043.374.103.657.141.753.126.32.311.739.645 1.024.334.284.813.474 1.688.284.759-.165 1.227-.394 1.54-.723.313-.329.499-.787.618-1.488.179-1.05.538-4.095.582-4.668-.02-.432.043-.764.18-1.017.14-.26.358-.419.545-.505.094-.043.182-.072.254-.093a6.148 6.148 0 0 0-.249-.336l.009.011a4.456 4.456 0 0 1-.647-1.07l-.011-.029a7.94 7.94 0 0 0-.275-.522l.021.039c-.131-.24-.297-.54-.471-.877-.348-.675-.726-1.493-.923-2.29-.196-.796-.224-1.62.278-2.201.444-.516 1.225-.73 2.396-.61-.034-.105-.055-.192-.114-.332a7.872 7.872 0 0 0-1.035-1.772c-.993-1.282-2.598-2.551-5.076-2.592h-.11zm-.774 15.098v.035-.035zM7.851 7.77l.002-.001.003-.003z"></path><path fill="#32648D" d="m9.321 7.093.01-.001.008-.003zM10.047 7.391h-.002zM10.56 12.937c.401-1.094 1.19-1.892.526-5.006-.109-.51-.324-.716-.62-.832a1.42 1.42 0 0 0-.486-.084h-.034.002a2.721 2.721 0 0 0-.617.077 4.61 4.61 0 0 0-1.134.448c-.129.071-.24.145-.344.228l-.019.018c.006.146.034.5.046 1.021a13.22 13.22 0 0 1-.111 2.084c-.236 1.71.99 3.126 2.43 3.128.085-.351.223-.707.361-1.082zm-.851-4.969a.68.68 0 0 1-.116-.161l-.002-.004a.28.28 0 0 1-.039-.178v.001c.015-.108.103-.164.188-.195a.835.835 0 0 1 .305-.04l-.001-.004c.052 0 .108.005.164.013.151.021.286.062.388.122a.448.448 0 0 1 .13.105l.001.001c.034.039.054.09.054.147l-.001.024v-.001a.309.309 0 0 1-.074.154.679.679 0 0 1-.139.129l-.002.001a.617.617 0 0 1-.445.113h.003a.715.715 0 0 1-.414-.227z"></path><path fill="#32648D" d="m8.177 7.55.02-.01.003-.002-.023.012zm9.938-3.798a8.402 8.402 0 0 1 1.097 1.865l.021.055c.109.264.182.487.223.66.021.087.035.16.04.236a.44.44 0 0 1-.012.144c0 .003-.005.01-.006.013.03.876-.185 1.47-.21 2.306-.02.606.133 1.318.171 2.095.036.73-.051 1.532-.52 2.319.04.048.075.096.113.144 1.239-1.975 2.132-4.16 2.608-6.023.255-1.003.39-1.912.402-2.632.01-.72-.123-1.242-.291-1.46-1.326-1.716-3.119-2.153-4.623-2.165v.001h-.144a8.56 8.56 0 0 0-1.681.193c1.228.552 2.158 1.402 2.812 2.249z"></path><path d="M12.561.258h-.01c-1.164-.02-2.163.266-2.97.742C8.787.721 7.14.24 5.403.336 4.194.403 2.874.775 1.896 1.82.921 2.865.406 4.482.514 6.682c.03.607.201 1.597.484 2.879.284 1.282.682 2.783 1.179 4.152.497 1.37 1.041 2.6 1.892 3.436.425.419 1.01.771 1.699.742.484-.02.921-.235 1.299-.552.184.245.38.352.559.451.225.125.444.21.671.266.408.103 1.106.241 1.924.1a3.59 3.59 0 0 0 .864-.27c.011.33.024.653.036.98.041 1.036.066 1.993.373 2.832.049.137.185.843.718 1.466.533.624 1.579 1.013 2.769.755.84-.182 1.907-.51 2.617-1.532.701-1.01 1.017-2.459 1.08-4.809.016-.127.035-.235.054-.336l.167.015h.02c.896.041 1.868-.088 2.68-.47.719-.337 1.263-.678 1.66-1.283.099-.15.207-.331.237-.643s-.147-.8-.441-1.025c-.588-.452-.957-.28-1.353-.197a5.93 5.93 0 0 1-1.179.146h-.008c1.142-1.947 1.961-4.015 2.428-5.845.277-1.08.432-2.076.444-2.947.013-.871-.057-1.642-.573-2.309C21.203.6 18.938.024 17.185.004c-.054-.001-.109-.002-.163-.001V0a9.939 9.939 0 0 0-2.741.409l-.041.014a10.36 10.36 0 0 0-1.679-.165zm2.369.637a9.126 9.126 0 0 1 2.04-.251h.006l.001-.004c1.658-.016 3.775.455 5.296 2.422.342.442.444 1.088.432 1.884-.013.795-.158 1.747-.424 2.79-.516 2.02-1.49 4.375-2.862 6.488a.714.714 0 0 0 .151.084l.005.002c.286.12.939.223 2.242-.048.328-.07.568-.117.817.075a.52.52 0 0 1 .182.397l-.001.03v-.001a.709.709 0 0 1-.129.336c-.252.383-.749.746-1.385 1.045-.564.266-1.373.405-2.09.413-.36.004-.691-.024-.973-.113l-.018-.007c-.109 1.06-.359 3.153-.522 4.108-.13.77-.358 1.382-.794 1.84-.435.458-1.05.734-1.878.914-1.025.223-1.773-.017-2.255-.428-.481-.41-.701-.954-.834-1.287-.091-.23-.138-.528-.184-.926s-.079-.885-.102-1.434a49.014 49.014 0 0 1-.034-1.873c0-.217.002-.433.004-.65a2.993 2.993 0 0 1-1.515.757l-.018.003c-.681.117-1.288.002-1.651-.09a2.202 2.202 0 0 1-.519-.204c-.166-.09-.324-.193-.43-.394a.563.563 0 0 1-.055-.382.613.613 0 0 1 .214-.328l.001-.001c.196-.161.454-.251.845-.333.71-.148.958-.249 1.109-.37.128-.104.274-.314.53-.622l-.003-.038v-.003A2.876 2.876 0 0 1 8.8 14.33l.015.008c-.148.158-.905.968-1.827 2.092-.388.47-.817.74-1.269.759s-.861-.211-1.209-.552c-.695-.683-1.249-1.858-1.732-3.186-.482-1.328-.874-2.807-1.153-4.067-.28-1.26-.444-2.276-.468-2.766-.104-2.082.377-3.485 1.202-4.37.826-.885 1.958-1.22 3.061-1.284 1.981-.115 3.861.584 4.242.734.734-.504 1.679-.818 2.858-.798a7.264 7.264 0 0 1 1.711.229l-.05-.011.02-.009c.191-.072.435-.145.685-.205l.044-.009z">
          </path>
        </svg>
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname:
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" id="mongodb">
          <path fill="#FFF" d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path><path fill="#A6A385" d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path><path fill="#FFF" d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path><path fill="#499D4A" d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path><path fill="#FFF" d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path><path fill="#58AA50" d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z">
          </path>
        </svg>
    },
    {
      skillName: "Mysql",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" />
    },
    {
      skillName: "InfluxDB",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Influxdb_logo.svg/2560px-Influxdb_logo.svg.png" />
    },
    {
      skillName: "TimescaleDB",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://www.timescale.com/static/79710f639649231453e89d9050cbd5dc/TimescaleLogoSocialMedia1Png.png" />
    },


    {
      skillName: "MilvusDB",
      fontAwesomeClassname:
        <img style={{ height: '60px' }} src="https://avatars.githubusercontent.com/u/51735404?s=280&v=4" />
    },



    {
      skillName: "Nginx",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png" />
    },


    {
      skillName: "RabbitMQ",
      fontAwesomeClassname:
        <svg viewBox="0 1 30 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.035 9.601h-7.677a.956.956 0 01-.962-.962V.962a.956.956 0 00-.962-.956H10.56a.956.956 0 00-.962.956V8.64a.956.956 0 01-.962.962H5.762a.956.956 0 01-.961-.962V.962A.956.956 0 003.839 0H.959a.956.956 0 00-.956.962v22.076A.956.956 0 00.965 24h22.07a.956.956 0 00.962-.962V10.58a.956.956 0 00-.962-.98zm-3.86 8.152a1.437 1.437 0 01-1.437 1.443h-1.924a1.437 1.437 0 01-1.436-1.443v-1.917a1.437 1.437 0 011.436-1.443h1.924a1.437 1.437 0 011.437 1.443z" fill="#878787">
          </path>
        </svg>
      // <img style={{ height: '40px' }} src="https://w7.pngwing.com/pngs/260/676/png-transparent-rabbitmq-hd-logo-thumbnail.png" />
    },

    {
      skillName: "ReactJS",
      fontAwesomeClassname:
        <img style={{ height: '40px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname:
        <img style={{ height: '40px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/512px-Arduino_Logo.svg.png" />
    },
    {
      skillName: "Raspbreey Pi",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png" />
    },
    {
      skillName: "Docker",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" />
    },
    {
      skillName: "Open ZFS",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/7/75/OpenZFS_logo.svg" />
    },
    {
      skillName: "Minio",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://min.io/resources/img/logo/MINIO_Bird.png" />
    },
    {
      skillName: "WireGuard",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://static-00.iconduck.com/assets.00/wireguard-icon-512x512-7suxjlbo.png" />
    },
    {
      skillName: "AWS",
      fontAwesomeClassname:
        <img style={{ height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" />
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vishwakarma Institure of Technology",
      logo: require("./assets/images/vit.png"),
      subHeader: "B-Tech in Mechanical Engineering",
      duration: "September 2017 - April 2021"
    },
    {
      schoolName: " Mahaveer English Medium School and Junior College",
      logo: require("./assets/images/mjc.jpg"),
      subHeader: "11ht-12th HSC Board",
      duration: "June 2015 - May 2017"
    },
    {
      schoolName: " The Bishop's Co-Ed School",
      logo: require("./assets/images/bs2.png"),
      subHeader: "10th ICSE Board",
      duration: "June 2005- April 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },

    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Dev Ops",
      progressPercentage: "60%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr Full Stack Developer",
      company: "IAM Intigrated Active Monitoring",
      companylogo: require("./assets/images/iam.jpg"),
      date: "June 2021 – Present",
      descBullets: [
        "Designed and Build a Complex Event Driven CMS Application Pipeline with Admin Portal and Several Message Broker Workers supporting multi-client and multi-location Access Control and Intrusion Panel Events."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Shyen Tech Yarns",
      companylogo: require("./assets/images/sty2.png"),
      date: "June 2020 – Jan 2021",
      // desc: "Distributed AI, deep learning and computer vision solutions Tested and validated models for accuracy of predictions in outcomes of interest. Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations."
      descBullets: [
        "Distributed AI, deep learning and computer vision solutions.",
        "Tested and validated models for accuracy of predictions in outcomes of interest.",
        "Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations."
      ]
    },


    {
      role: "Computer-Vision Domain Head",
      company: "The Robotics Forum",
      companylogo: require("./assets/images/trf1.jpg"),
      date: "June 2018 – April 2020",
      descBullets: [
        "Mentored Juniors for Design and Build AI, deep learning and computer vision solutions.",
        "Image Processing Solutions being a problem Statement for DRDO"
      ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Publications that I have done !",

  achievementsCards: [
    {
      title: "5th ICRAE CONFERENCE",
      subtitle:
        "Autonomous Amphibious Vehicle for Monitoring and Collecting Marine Debris",
      image: "https://www.ieee-ras.org/images/files/template/ieee-ras-logo.png",
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/document/9310888"
        }

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project? My Inbox is open for all.",
  // number: "+91-9168700615",
  email_address: "sumittanpure8@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
