# CLI Commands

## cd
takes you back to your user home directory

## pwd
prints working directory; shows you the location of where you're at

## ls
lists the directories and files located in your current working directory

## ls -la
lists all of the directories and files, including hidden folders and files, in your current working directory; also provides additional information

## cd &lt;some directory&gt;
Moves you into a new directory

## cd ../
moves you up one level in the directory hierarchy

## nano &lt;some file name&gt;
opens a CLI text editor where you can create a file and save it

## cat &lt;filename&gt;
prints out the contents of a file

# Git commands

## setting up a new repo

### in github
- create a new repo

### on your computer
- create a folder with the same name
- using CLI, make that folder your current working directory
- run this command

```
git init
```

- confirm you intialized the repo; at the CLI run this command

```
ls -la
```

- you should see a ```.git``` folder
- now create a file

```
nano <somefile.txt>;
```

- now add that file to the git staging area

```
git add --all
```

- now commit that file

```
git commit -m "<some message>"
```

- now connect your LOCAL COMPUTER with GITHUB; this is a one time only operation; run each of these commands, on at a time; you will need to replace git@github.com:GoesToEleven/temp.git with your info

```
git remote add origin <git@github.com:GoesToEleven/temp.git>
git push -u origin master

```

## Normal git workflow

```
git status
git add --all
git commit -m "<some message>"
git push
```

