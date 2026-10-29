import {
  FaReact, FaVuejs, FaAngular, FaBootstrap, FaNodeJs, FaPython, FaChartLine, FaAws, FaDocker,
} from 'react-icons/fa'
import {
  SiTypescript, SiTailwindcss, SiMui, SiQuasar, SiExpress, SiFlask, SiFastapi, SiPostgresql, SiMysql,
  SiSqlalchemy, SiFramer, SiGreensock, SiTensorflow, SiLangchain, SiOpenapiinitiative,
} from 'react-icons/si'

const icons = {
  FaReact, FaVuejs, FaAngular, FaBootstrap, FaNodeJs, FaPython, FaChartLine, FaAws, FaDocker,
  SiTypescript, SiTailwindcss, SiMui, SiQuasar, SiExpress, SiFlask, SiFastapi, SiPostgresql, SiMysql,
  SiSqlalchemy, SiFramer, SiGreensock, SiTensorflow, SiLangchain, SiOpenapiinitiative,
}

export default function TechIcon({ name, color, className = 'h-8 w-8' }) {
  const Icon = icons[name] ?? FaChartLine
  return <Icon className={className} style={{ color }} aria-hidden="true" />
}
