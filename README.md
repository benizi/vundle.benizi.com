# vundle.benizi.com

A simple web installer for [Vundle][vundle]

## Instructions

Run this in your shell:

```sh
vim http://vundle.benizi.com/ +'so %'
```

It will run a Vim script to install [Vundle][vundle].

## Motivation

I'm sick of trying to explain why people should use Vim plugin managers like
[pathogen][pathogen], [vim-addon-manager][vam], and/or [Vundle][vundle].
Instead, I'd like to point them to something like the [emacs-live][emacs-live]
instructions, which runs a shell script off the web.

## Why Vundle?

For a long time, I was using a combination of vim-addon-manager (which has
wonderful installation capabilities) and pathogen (which has wonderful "run
everything" capabilities).  Then I found Vundle, which has the best of both
worlds.

[pathogen]: https://github.com/tpope/vim-pathogen
[vam]: https://github.com/MarcWeber/vim-addon-manager
[vundle]: https://github.com/gmarik/vundle
[emacs-live]: http://overtone.github.com/emacs-live/
