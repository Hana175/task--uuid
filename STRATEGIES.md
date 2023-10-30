Introduction

This document outlines the strategies employed during the implementation of the project, providing insights into decision-making, best practices, and approaches to problem-solving.
Table of Contents

    Code Organization
    Reactivity and State Management
    Asynchronous Operations
    Map Integration and Third-Party Libraries
    Optimization and Performance
    Testing
    Documentation and Comments

Code Organization

    Modularization: Code is organized into modules and components, enhancing readability and maintainability, 
    StorageHandler.js is to handle all things related to storage, MapComponent.vue is a vue component that handles anything map/marker/location related and finally App.vue just displays the components made.
    File Structure: Utilized a logical and intuitive file structure, grouping related files and components together.

Reactivity and State Management

    Vue 3 Composition API: Leveraged Vue 3 Composition API for cleaner and more efficient component logic.
    Reactive Variables: Used ref()for creating variables and objects, ensuring reactivity if needed, in this case reactive() was not used.
    Computed Properties: Utilized computed properties to derive values from reactive data, enhancing performance.

Asynchronous Operations

    Async/Await: Employed async/await syntax for asynchronous operations, enhancing readability and maintainability all by using partytown.
   


Map Integration and Third-Party Libraries

    Leaflet: Integrated Leaflet, a popular open-source JavaScript library for interactive maps, ensuring a smooth and feature-rich mapping experience.
    Leaflet Plugins: Utilized Leaflet plugins for additional functionality, enhancing user interactions and visual appeal.
    

Optimization and Performance

    Minification and Bundling: Employed minification and bundling techniques for optimizing code size and reducing load times.
    Lazy Loading (partytown): Implemented lazy loading for non-critical components and resources, improving initial page load performance.
    

Documentation and Comments

    Inline Comments: Provided descriptive inline comments within the code, explaining complex logic and enhancing code comprehension.
    README.md: Maintained a detailed README.md offering a smooth way to build the application from scratch by vite and INSTALL.md file, offering clear instructions for setting up the project, along with other relevant information.
   

By following these strategies, the implementation process was streamlined, resulting in a robust, performant, and maintainable application. These practices ensure code quality, enhance collaboration, and facilitate future enhancements and updates to the project.

After running, make sure to activate the red marker by dragging it first then clicking on it to view it's location.
