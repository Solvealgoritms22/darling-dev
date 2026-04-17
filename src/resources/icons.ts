import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
  HiSpeakerWave,
  HiSpeakerXMark,
  HiChevronRight,
  HiPlay,
  HiCommandLine,
  HiArrowDownTray
} from "react-icons/hi2";

import {
  SiDiscord,
  SiGithub,
  SiX,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiVercel,
  SiGithubactions,
  SiDocker,
  SiDiagramsdotnet
} from "react-icons/si";

import {
  FaLinkedin,
  FaXTwitter
} from "react-icons/fa6";

import {
  DiMsqlServer
} from "react-icons/di";

import {
  VscAzureDevops,
  VscVscode
} from "react-icons/vsc";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  discord: SiDiscord,
  'volume-on': HiSpeakerWave,
  'volume-off': HiSpeakerXMark,
  'chevron-right': HiChevronRight,
  'play': HiPlay,
  'github': SiGithub,
  'linkedin': FaLinkedin,
  'x': FaXTwitter,
  // Technology Icons
  'react': SiReact,
  'angular': SiAngular,
  'nextjs': SiNextdotjs,
  'typescript': SiTypescript,
  'node': SiNodedotjs,
  'python': SiPython,
  'django': SiDjango,
  'express': SiExpress,
  'firebase': SiFirebase,
  'sqlserver': DiMsqlServer,
  'mysql': SiMysql,
  'postgresql': SiPostgresql,
  'vercel': SiVercel,
  'azure': VscAzureDevops,
  'githubactions': SiGithubactions,
  'docker': SiDocker,
  // Tools
  'vscode': VscVscode,
  'drawio': SiDiagramsdotnet,
  'openclaw': HiCommandLine,
  'antigravity': HiOutlineRocketLaunch,
  'download': HiArrowDownTray
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;