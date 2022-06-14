import { projectList, techsList } from './data.js'

const projects = document.querySelector('.projects')
const technologies = document.querySelector('.technologies')

eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    showProjects()
    showTechnologies()
  })
}

function showProjects() {

  projectList.forEach( project => {

    const container = document.createElement('div')
    container.classList.add('projects__div')

      const image = document.createElement('img')
      image.loading = "lazy"
      image.classList.add('projects__div-img')
      image.src = project.image;
      image.alt = "Covers of my projects"

      const span = document.createElement('span')
      span.classList.add('projects__div-span')

        const ul = document.createElement('ul')
        ul.classList.add('list-tech')
    
          for(let i = 0; i < project.techs.length; i++) {
            const li = document.createElement('li')
            li.classList.add('list-tech__li')

              let title = project.techs[i].split('\\').pop().split('/').pop();
              title = title.replace('icon-', '')
              title = title.replace('.svg', '')
  
              const icon = document.createElement('img')
              icon.loading = "lazy"
              icon.alt = "icon of " + title
              icon.title = title
              icon.src = project.techs[i]

            li.appendChild(icon)
            ul.appendChild(li) 
          }

        const title = document.createElement('h3')
        title.classList.add('projects__div-span-h3')
        title.textContent = project.title

        const description = document.createElement('p')
        description.classList.add('projects__div-span-p')
        description.textContent = project.description

        const view = document.createElement('a')
        view.classList.add('projects__div-span-a')
        view.href = project.view
        view.textContent = 'View '
        view.target = '_BLANK'

          const eye = document.createElement('i')
          eye.classList.add('icon-eye')

        view.appendChild(eye)

        const code = document.createElement('a')
        code.classList.add('projects__div-span-a')
        code.href = project.code
        code.textContent = 'Code '
        code.target = '_BLANK'

          const github = document.createElement('i')
          github.classList.add('icon-github')

        code.appendChild(github)

      span.appendChild(ul)
      span.appendChild(title)
      span.appendChild(description)
      span.appendChild(view)
      span.appendChild(code)

    container.appendChild(image)
    container.appendChild(span)

    projects.appendChild(container)
    
  })

}

function showTechnologies() {
  techsList.forEach( tech => {
    const container = document.createElement('div')
    container.classList.add('technologies__div')

      const cardFront = document.createElement('div')
      cardFront.classList.add('card', 'front')

      const cardBack = document.createElement('div')
      cardBack.classList.add('card', 'back')

        const iconFront = document.createElement('i')
        iconFront.classList.add('tech-icon', 'fa-brands', tech.icon, 'icon')
        iconFront.title = tech.name

        const nameFront = document.createElement('p')
        nameFront.classList.add('technologies__div-p')
        nameFront.textContent = tech.name

        const iconBack = document.createElement('i')
        iconBack.classList.add('tech-icon', 'fa-brands', tech.icon, 'icon')
        iconBack.title = tech.name

        const nameBack = document.createElement('p')
        nameBack.classList.add('technologies__div-p')
        nameBack.textContent = tech.name

      cardFront.appendChild(iconFront)
      cardFront.appendChild(nameFront)

      cardBack.appendChild(iconBack)
      cardBack.appendChild(nameBack)

    container.appendChild(cardFront)
    container.appendChild(cardBack)

    technologies.appendChild(container)
  })
}

