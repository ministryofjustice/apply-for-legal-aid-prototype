# Apply for Legal Aid Prototype

Make sure you have Node.js v18.x installed locally.

## Setup

```sh
git clone https://github.com/ministryofjustice/apply-for-legal-aid-prototype.git
cd apply-for-legal-aid-prototype
npm install
npm run dev
```

To start the prototype locally, run `npm run dev`.

## Deploying to Cloud platform

A github action is set up for this prototype so that every time someone pushes to the master branch, this triggers an automatic deployment of the master branch to the Cloud platform. Therefore, you do not need to do anything other than push your code to master or merge your branch into the master branch, and it will deploy automatically.
