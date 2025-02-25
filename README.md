# React News App

A modern news application built with React that provides real-time news updates from various sources using the News API.

## Features

- Real-time news updates
- Category-wise news filtering
- Responsive design
- Article search functionality
- Clean and intuitive user interface

## Technologies Used

- React.js
- News API
- Bootstrap
- React Router
- Context API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm/yarn
- News API Key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-news-app.git
cd react-news-app
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your News API key
```bash
REACT_APP_NEWS_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
```

## Environment Variables

Create a `.env` file with the following variables:
```
REACT_APP_NEWS_API_KEY=your_api_key_here
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
react-news-app/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── App.js
├── .env
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [News API](https://newsapi.org/) for providing the news data
- [Create React App](https://create-react-app.dev/) for the initial project setup
- [React Router](https://reactrouter.com/) for routing functionality
