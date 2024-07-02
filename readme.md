# CLI Note App

A simple command-line interface (CLI) tool for creating, reading, updating, and deleting notes directly from the terminal. Streamline your note-taking with fast and efficient commands.

## Installation

Clone the repository and navigate into the project directory:

```sh
git clone <repository-url>
cd <repository-directory>
```

Install dependencies:

```sh
npm install
```

## Usage

The CLI Note App supports several commands to manage your notes.

### Commands

#### Create a New Note

Create a new note with optional tags.

```sh
note new "<note>" --tags "<tag1,tag2,...>"
```

Example:

```sh
note new "Remember to buy milk" --tags "shopping,reminders"
```

#### Get All Notes

Retrieve a list of all notes.

```sh
note all
```

#### Find Matching Notes

Search for notes that contain a specific term in their content.

```sh
note find "<filter>"
```

Example:

```sh
note find "milk"
```

#### Remove a Note by ID

Delete a note by its ID.

```sh
note remove <id>
```

Example:

```sh
note remove 1
```

#### Launch Web Interface

Launch a web interface to view and manage your notes.

```sh
note web [port]
```

The default port is `5000
