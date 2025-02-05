# OSCT  
For Senior Design Project  

### Prerequisites  
Make sure you have the following installed:  

- **Node.js** v20.10.1 or higher (`node -v` to check)  
- **npm** v10.8.2 (`npm -v` to check)  

If you don’t have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Getting Started  

### Install Dependencies  
```sh
npm install
```

### Start the Development Server
```sh
npm run dev
```
After executing, control click on the local host link.
```sh
Local:   http://localhost:3000/
```
If your browser gives you an error page stating that it can not open the site, copy and paste the link manually into your browser bar.

### Build for Production
```sh
npm run build
```
## Jira Integration 
To use Jira's Integration, you need to use an issue key to sync progress to Jira's Board.
Issue keys are just special tags that are tied to any element we track in the app(Our to do tasks).
Issue keys are displayed on the task card.

### Branching with Jira issue keys
When creating your working branch, include the issue key for the task you are going to work on in order to sync with Jira Board.
```sh
git checkout -b issue-key-<branch-name>
```

### Committing with Jira issue keys
When committing from your working branch, include the issue key for the task you were working on to update Jira's Board.
```sh
git commit -m "issue-key <summary of commit>"
```
### Commit Resolved Issue When Pushing New Branch
If you receive the error "fatal: The current branch <issue-key-<branch-name>> has no upstream branch.",
run the following:
```sh
git push --set-upstream origin issue-key-<branch-name>
```
