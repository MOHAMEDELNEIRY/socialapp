import {
  faBell,
  faImage,
  faMessage,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import avatar from "../../assets/images/user2.jpg";
import signupBg from "../../assets/images/bg.jpg";
export default function SignupHero() {
  const features = [
    {
      icon: faMessage,
      title: " Real-time Chat",
      desc: "Instant messaging",
      colors: "bg-teal-400/20 text-green-300",
    },
    {
      icon: faImage,
      title: " Share Media",
      desc: " Photos & videos",
      colors: "bg-blue-400/20 text-blue-100",
    },
    {
      icon: faBell,
      title: " Smart Alerts",
      desc: "Stay updated",
      colors: "bg-pink-400/20 text-pink-100",
    },
    {
      icon: faUsers,
      title: "Communities",
      desc: "Find your tribe",
      colors: "bg-teal-400/20 text-green-300",
    },
  ];

  const stats = [
    {
      icon: faUsers,
      value: "2M+",
      lable: "Active Users",
    },
    {
      icon: faHeart,
      value: "10M+",
      lable: "Post Shared",
    },
    {
      icon: faMessage,
      value: "50M+",
      lable: "Message Sent",
    },
  ];

  return (
    <>
      <div
        className={`signup-hero min-h-screen bg-cover bg-center text-white flex flex-col justify-between p-10 gap-8`}
        style={{
          backgroundImage: `linear-gradient(#1447e6cc,#1447e6cc),url(${signupBg})`,
        }}
      >
        <header className="">
          <h1>
            <Link className="flex items-center gap-2">
              <span className="size-10 text-lg font-bold flex justify-center items-center bg-white/40 border border-white/30  rounded-xl">
                S
              </span>
              <span className="text-2xl font-bold">socialHp</span>
            </Link>
          </h1>
        </header>

        <div className="content space-y-4">
          <div className="title">
            <h2 className="text-5xl font-bold max-w-96">
              Connect With{" "}
              <span className="p-2 bg-linear-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                amazing people
              </span>{" "}
            </h2>
            <p className="max-w-md">
              Join millions of users sharing moments, ideas, and building
              meaningful connections every day.
            </p>
          </div>
          <section className="feature-section">
            <h3 className="sr-only">platform features</h3>
            <ul className="feature-cards list-none grid lg:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border-white/30 rounded-xl px-4 py-2
                  hover:scale-105 duration-200
                  "
                  key={feature.title}
                >
                  <div
                    className={`icon size-10 flex justify-center items-center rounded-xl ${feature.colors}`}
                  >
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div className="card-body">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <ul className="flex items-center gap-5">
              {" "}
              {stats.map((stat) => (
                <li>
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-1 items-center justify-center">
                        <FontAwesomeIcon icon={stat.icon} />
                    <span className="text-xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm">{stat.lable}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <figure className=" bg-white/20 border border-white/30 backdrop-blur-sm rounded-xl p-4 space-y-4 hover:bg-white/25 transition-colors duration-200">
          <div className="raiting-average">
            {[...Array(5)].map(() => (
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 hover:scale-105 transition-transform duration-200" />
            ))}
          </div>
          <blockquote className="text-lg italic">
            <p>
              “SocialHub has completely changed how I connect with friends and
              discover new communities. The experience is seamless!”
            </p>
          </blockquote>
          <figcaption className="auther flex items-center gap-3">
            <img src={avatar} alt="" className="size-12 rounded-circle " />
            <div className="info flex flex-col">
              <cite>Alex Johnson</cite>
              <span className="text-sm text-gray-300">Product Designer</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
