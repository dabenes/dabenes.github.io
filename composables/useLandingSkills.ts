export interface SkillCategoryItem {
  key: string
  translationKey: string
}

export interface SkillCategoryGroup {
  key: string
  titleKey: string
  titleClass: string
  arrowClass: string
  items: SkillCategoryItem[]
}

export const useLandingSkills = () => {
  const categories: SkillCategoryGroup[] = [
    {
      key: 'stack',
      titleKey: 'categories.stack',
      titleClass: 'text-blue-300',
      arrowClass: 'text-blue-400',
      items: [
        { key: 'stack.net8', translationKey: 'skills.stack.net8' },
        { key: 'stack.csharp12', translationKey: 'skills.stack.csharp12' },
        { key: 'stack.sqlserver', translationKey: 'skills.stack.sqlserver' },
        { key: 'stack.orm', translationKey: 'skills.stack.orm' },
        { key: 'stack.restapis', translationKey: 'skills.stack.restapis' }
      ]
    },
    {
      key: 'frontend',
      titleKey: 'categories.frontend',
      titleClass: 'text-green-300',
      arrowClass: 'text-green-400',
      items: [
        { key: 'frontend.vue3', translationKey: 'skills.frontend.vue3' },
        { key: 'frontend.javascript', translationKey: 'skills.frontend.javascript' },
        { key: 'frontend.typescript5', translationKey: 'skills.frontend.typescript5' },
        { key: 'frontend.tailwind', translationKey: 'skills.frontend.tailwind' },
        { key: 'frontend.htmlcss', translationKey: 'skills.frontend.htmlcss' }
      ]
    },
    {
      key: 'infra',
      titleKey: 'categories.infra',
      titleClass: 'text-yellow-300',
      arrowClass: 'text-yellow-400',
      items: [
        { key: 'infra.docker', translationKey: 'skills.infra.docker' },
        { key: 'infra.gitci', translationKey: 'skills.infra.gitci' },
        { key: 'infra.cloudflare', translationKey: 'skills.infra.cloudflare' },
        { key: 'infra.ghactions', translationKey: 'skills.infra.ghactions' },
        { key: 'infra.linux', translationKey: 'skills.infra.linux' }
      ]
    },
    {
      key: 'languages',
      titleKey: 'categories.languages',
      titleClass: 'text-purple-300',
      arrowClass: 'text-purple-400',
      items: [
        { key: 'lang.csharp', translationKey: 'skills.languages.csharp' },
        { key: 'lang.tsjs', translationKey: 'skills.languages.tsjs' },
        { key: 'lang.sql', translationKey: 'skills.languages.sql' },
        { key: 'lang.java', translationKey: 'skills.languages.java' },
        { key: 'lang.c_cpp', translationKey: 'skills.languages.c_cpp' }
      ]
    },
    {
      key: 'practices',
      titleKey: 'categories.practices',
      titleClass: 'text-red-300',
      arrowClass: 'text-red-400',
      items: [
        { key: 'practices.cleancode', translationKey: 'skills.practices.cleancode' },
        { key: 'practices.architecture', translationKey: 'skills.practices.architecture' },
        { key: 'practices.apidesign', translationKey: 'skills.practices.apidesign' },
        { key: 'practices.testing', translationKey: 'skills.practices.testing' },
        { key: 'practices.observability', translationKey: 'skills.practices.observability' }
      ]
    }
  ]

  return { categories }
}
