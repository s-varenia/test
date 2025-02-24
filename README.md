# Hello, World!

## Clear branch history

```
git checkout --orphan latest_branch
git add -A
git commit -am "Clear history"
git branch -D master
git branch -m master
git push -f origin master
```

[stackoverflow.com](https://stackoverflow.com/a/26000395)

## New branch with No Ancestors

```
git checkout master
git checkout --orphan foo

# Unstage all the files in your working tree.
git rm --cached $(git ls-files)
```

Do not delete `.git` folder

[stackoverflow.com](https://stackoverflow.com/a/11487993)
