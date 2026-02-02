import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';
import { 
  Code2, 
  FileCode, 
  Coffee, 
  Terminal, 
  Database as DatabaseIcon,
  Globe,
  Layers,
  FileType,
  Cpu,
  Layout,
  Server,
  Cloud,
  Container,
  GitBranch,
  Workflow,
  Rocket
} from 'lucide-react';

// Skill icons mapping
const skillIcons: Record<string, React.ReactNode> = {
  // Languages
  'Python': <Code2 size={14} />,
  'C++': <Cpu size={14} />,
  'Java': <Coffee size={14} />,
  'JavaScript': <FileCode size={14} />,
  'TypeScript': <FileType size={14} />,
  'SQL': <DatabaseIcon size={14} />,
  'MATLAB': <Terminal size={14} />,
  // Frontend
  'React': <Layers size={14} />,
  'Angular': <Layout size={14} />,
  'Next.js': <Globe size={14} />,
  'HTML5': <FileCode size={14} />,
  'CSS3': <Layout size={14} />,
  // Backend
  'Node.js': <Server size={14} />,
  'Spring Boot': <Rocket size={14} />,
  'Express.js': <Server size={14} />,
  'RESTful APIs': <Workflow size={14} />,
  'MySQL': <DatabaseIcon size={14} />,
  'DynamoDB': <DatabaseIcon size={14} />,
  'Redis': <DatabaseIcon size={14} />,
  // Cloud
  'AWS': <Cloud size={14} />,
  'Azure': <Cloud size={14} />,
  'Docker': <Container size={14} />,
  'Kubernetes': <Container size={14} />,
  'Jenkins': <Workflow size={14} />,
  'CI/CD': <Workflow size={14} />,
  'Git': <GitBranch size={14} />,
};

const Skills = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { skills } = portfolioData;

  const skillCategories = [
    { label: 'LANGUAGES', key: 'languages' as const },
    { label: 'FRONTEND', key: 'frontend' as const },
    { label: 'BACKEND', key: 'backend' as const },
    { label: 'CLOUD_DEVOPS', key: 'cloud' as const },
  ];

  return (
    <section className="relative px-6 py-20" id="skills">
      <span className="section-label top-4 left-4">&lt;section id="skills"&gt;</span>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// TECHNICAL_SKILLS' : 'Skills'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              className={`blueprint-container p-6 rounded-lg ${isLaunchMode ? 'glass-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <span className="section-label -top-2 left-2">&lt;div class="skill-group"&gt;</span>
              
              <h3 className={`text-sm font-mono mb-4 ${isLaunchMode ? 'text-primary' : 'text-muted-foreground'}`}>
                {isBlueprintMode ? `// ${category.label}` : category.label.replace('_', ' & ')}
              </h3>

              {isBlueprintMode ? (
                // Blueprint: Raw checklist
                <ul className="space-y-2 font-mono text-sm">
                  {skills[category.key].map((skill, index) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="text-muted-foreground">[{String(index).padStart(2, '0')}]</span>
                      <span className="text-foreground">{skill}</span>
                      <span className="text-muted-foreground ml-auto">✓</span>
                    </li>
                  ))}
                </ul>
              ) : (
                // Launch: Animated pill badges with icons
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-badge inline-flex items-center gap-1.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skillIcons[skill] && <span className="text-primary">{skillIcons[skill]}</span>}
                      {skill}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default Skills;
