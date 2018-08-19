#!/bin/sh

gitstatus=$(git status)
if [[ "$gitstatus" == *"nothing to commit, working tree clean"* ]]; then

    # remove dist from gitignore
    rm -rf dist
    sed -i -e 's/\/dist/#\/dist/g' .gitignore

    # build app
    echo -e "\nNo uncomitted changes, building...\n"

    if ng build --prod --base-href "./" ; then

        echo -e "\nSuccessful build, deploying...\n"

        # deploy to Github Pages
        cp "dist/index.html" "dist/404.html"
        git add .
        git commit -m "deploy"
        git push origin `git subtree split --prefix dist master`:gh-pages --force
        git reset HEAD~

        # reset temp changes
        git checkout -- .
        echo -e "\nDeployed!\n"
        
    else
        git checkout -- .
        echo -e "\nApp failed to build!\n"
    fi

else
    echo -e "\nThere were uncomitted changes! Please commit or discard them before deploying.\n"
fi