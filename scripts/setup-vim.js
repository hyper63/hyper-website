#!/usr/bin/env zx

await $`curl -fLo ~/.vim/autoload/plug.vim --create-dirs   https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`

await $`cp .vimrc ~/.vimrc`

await $`vim +'PlugInstall --sync' +qa`

await $`echo 'VIM is setup'`

