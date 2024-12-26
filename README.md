# Website Feedback App

## Overview

This Website Feedback App is a modern, user-friendly application built with Next.js 15.1. It demonstrates the practical use of the latest Next.js features, integrates shadcn/ui components, and implements robust form handling with server-side validation. The app is designed to collect website feedback efficiently while showcasing best practices in web development.

## Features

- Clean and intuitive user interface using shadcn/ui components
- Server-side form validation using Zod
- Implementation of Next.js 15.1 features including Server Actions
- Responsive design suitable for various device sizes
- Accessibility-focused development
- Error handling and user feedback
- Ready for deployment on Vercel

## Technology Stack

- Next.js 15.1
- React
- TypeScript
- shadcn/ui
- Zod for validation

## Shadcn/ui Components Used

1. `Card`: Container for the feedback form, providing a clean and elevated surface
2. `Button`: Submit button with loading state support
3. `Input`: Title and email fields with proper styling
4. `Textarea`: Description field allowing multiline input
5. `RadioGroup`: Feedback type and priority selection
6. `Alert`: Display of success/error messages
7. `Label`: Form field labels with proper accessibility

## Server Actions

The app utilizes a server action named `submitFeedback` which:

- Handles form submission
- Uses Zod for server-side validation
- Implements error handling and returns appropriate responses
- Simulates a database operation (in a real app, you would connect to your database here)

## Next.js 15.1 Features Implemented

1. `unstable_noStore`: Used in the server action to opt out of caching, ensuring fresh data handling
2. Server Actions with FormData: Utilizing the built-in form handling capabilities
3. Client Components with Server Actions: Demonstrating the seamless integration between client and server components

## Project Structure

## Why Choose This Website Feedback Project?

This Website Feedback project was chosen for several compelling reasons:

1. **Practical Application**: Feedback systems are crucial for websites and applications to improve user experience and gather valuable insights. This project demonstrates a real-world use case that many businesses and developers can relate to.

2. **Showcase of Modern Web Technologies**: By utilizing Next.js 15.1 and its latest features, this project serves as an excellent example of how to leverage cutting-edge web development tools and techniques.

3. **Integration of UI Components**: The use of shadcn/ui components showcases how to integrate and customize a modern UI library within a Next.js application, providing a sleek and consistent user interface.

4. **Server-Side Functionality**: Implementing server actions demonstrates how to handle form submissions and perform server-side operations in a Next.js application, showcasing the framework's full-stack capabilities.

5. **Best Practices**: This project adheres to best practices in areas such as form validation, error handling, and accessibility, serving as a learning resource for developers looking to improve their skills.

6. **Deployment-Ready**: Being ready for deployment on Vercel without modifications makes this project an excellent template for developers who want to quickly set up and deploy similar applications.

7. **Scalability**: While the current implementation simulates database operations, the structure allows for easy integration with actual databases, making the project scalable for larger applications.

8. **Learning and Teaching Tool**: The clear structure and comprehensive documentation make this project an ideal learning and teaching tool for developers new to Next.js or looking to understand how to implement feedback systems.

By choosing this Website Feedback project, we've created a resource that not only solves a common web development need but also serves as a showcase for modern web development practices and technologies.


## Changes made to this codebase 

### Fixed the old versions of Next, and React 

```bash 
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npx @next/codemod@latest upgrade
npm i next@latest react@latest react-dom@latest eslint-config-next
```

### Code fix on layout.tsx 19:30 
./app/layout.tsx:19:30
Type error: Property 'font' does not exist on type 'NextFont'.

  17 |   return (
  18 |     <html lang="en">
> 19 |       <body className={inter.font}>{children}</body>
     |                              ^
  20 |     </html>
  21 |   )
  22 | }

In newer versions of Next.js, when you import a font using `next/font`, it returns an object with a `className` property instead of a `font` property.
This `className` contains the necessary CSS classes to apply the font to your elements.

### Added .gitignore so that we ignore node_module. This was causing problems. 




