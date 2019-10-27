# Coding Challenge - React

## Docker
This repository requires that [Docker] be installed in the host machine in order
to run the backend application that will be integrated for the SPA that will
be built with this challenge.

### Running the backend application
To run the backend application run the following command at the root directory
of this repository:

```
docker-compose up backend
```

To kill the app, simply press `CTRL-C` or open a new terminal in the same
direcotry of the repoistory and run:

```
docker-compose down
```

## Challenge

Create an SPA that integrates with the backend provided by this repository.

### Requirements

#### Before Development

1. The application source code must be written inside the pre-created
   application folder (`app`) that was creating using `create-react-app`.

#### Application

1. Present a page that has a text input for an account ID with a button. The
   text input __must__ only accept numerical values.
2. The button for the text input __must__ have a behaviour when clicked to display
   a pop up modal with the timesheet data for the given account ID.
3. On the modal page, there __must__ be an interface for editing each timesheet
   entry (start time and end time).
4. The button on the modal __must__ make a request to the backend service
   submitting all of the timesheet entries.
5. After the request to the backend, the response must be displayed in to the
   fields of the modal that have just beeen modified.

Bonus:

1. Handle validations (start time can not be greater than end time) and time
   overlaps and not rely on the backend to perform the said validations.
2. Handle different error codes returned by the backend (see Open API specs).

### Styleguide

See the precreated app for the CSS styleguide.

### Documentation

Run the container to view the Open API specs. Is it necessary to review the
Open API specification in order to integrate successfully with the backend
application.

```
docker-compose up docs
```
