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
