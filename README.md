# Personal Website

## Introduction

This is my (Reimar Rosas) Personal Website that will showcase my projects and host different ways to contact me.

## Index

- [Introduction](#introduction)
- [Index](#index)
- [About](#about)
- [Technologies](#technologies)
- [Usage](#usage)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Note](#note)
  - [Commands](#commands)
- [Resources](#resources)
- [Gallery](#gallery)
- [License](#license)

## About

This website, as mentioned before is my personal website. It will be mainly used for project showcase and contact information hosting when I apply for jobs in the future. However, it's also a way to practice creating simple websites.

## Technologies

* [NextJS](https://nextjs.org)
* [Supabase](https://supabase.com)

## Usage

### Requirements

* NodeJS >= 16.13.1
* Yarn >= 1.22.17

### Installation

1. Clone the website.

```
git clone https://github.com/reimarrosas/personal-website
```

2. Navigate to the folder.

```
cd ./personal-website
```

3. Install the dependencies. 

```
yarn install
```

4. Run the development environment.

```
yarn dev
```

#### Note

These steps will run the baseline project but it actually needs a `.env.local` file to run properly which needs a supabase url and anon key.

```
ADMIN_ID={preferred admin id}
ADMIN_PW={preferred admin password}
NEXT_PUBLIC_SUPABASE_URL={your project's supabase url}
NEXT_PUBLIC_SUPABASE_ANON_KEY={your project's anon public key}
```

### Commands

* `yarn dev` - launches the application in development mode
* `yarn build` - creates an optimized production build for the project
* `yarn start` - launches the application in production mode. The application should be compiled with `yarn build` first.
* `yarn lint` - runs ESLint for all files in `pages`, `components` and `lib` directories.

## Resources

* [NextJS Documentation](https://nextjs.org/docs)
* [Supabase Documentation](https://supabase.com/docs)

## Gallery

* Index Page

![Index Page of Personal Website](https://i.imgur.com/D7cuGap.png)

* Projects Page

![Projects Page of Personal Website](https://i.imgur.com/zUBp2C9.png)

* Admin Login Page

![Projects Page of Personal Website](https://i.imgur.com/DLjSqct.png)

* Admin Add/Edit Project Page

![Projects Page of Personal Website](https://i.imgur.com/HdkgE8H.png)

## License

Copyright (c) Reimar Rosas. Licensed under the [MIT](LICENSE) license
