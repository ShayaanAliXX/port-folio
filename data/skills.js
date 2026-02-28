import {
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
    FaDatabase,
} from "react-icons/fa";
import {
    SiDjango,
    SiCplusplus,
    SiC,
    SiMysql,
    SiSqlite,
} from "react-icons/si";
import {
    FaLightbulb,
    FaUsers,
    FaSyncAlt,
    FaComments,
    FaBrain,
} from "react-icons/fa";

export const technicalSkills = [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Django REST", icon: SiDjango, color: "#A30000" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
];

export const softSkills = [
    { name: "Problem Solving", icon: FaLightbulb },
    { name: "Teamwork", icon: FaUsers },
    { name: "Adaptability", icon: FaSyncAlt },
    { name: "Communication", icon: FaComments },
    { name: "Critical Thinking", icon: FaBrain },
];
