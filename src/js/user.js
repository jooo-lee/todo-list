import Project from "./project";

class User {
    #projects;
    #inbox; // Default project that all users have, do not delete!

    constructor() {
        this.#inbox = new Project("Inbox");
        this.#projects = [this.#inbox];
    }

    getInbox() {
        return this.#inbox;
    }

    getProjects() {
        return this.#projects;
    }

    addProject(project) {
        this.#projects.push(project);
    }

    deleteProject(targetProject) {
        const projectToBeDeleted = this.#projects.find(
            (project) => project.uuid === targetProject.uuid
        );
        const indexOfProjectToBeDeleted =
            this.#projects.indexOf(projectToBeDeleted);

        if (indexOfProjectToBeDeleted > -1) {
            this.#projects.splice(indexOfProjectToBeDeleted, 1);
        }
    }
}

export default User;
