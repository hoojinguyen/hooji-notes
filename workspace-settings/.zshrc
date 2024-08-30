# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time Oh My Zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git z zsh-autosuggestions zsh-syntax-highlighting zsh-nvm colored-man-pages history)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch $(uname -m)"

# Set personal aliases, overriding those provided by Oh My Zsh libs,
# plugins, and themes. Aliases can be placed here, though Oh My Zsh
# users are encouraged to define aliases within a top-level file in
# the $ZSH_CUSTOM folder, with .zsh extension. Examples:
# - $ZSH_CUSTOM/aliases.zsh
# - $ZSH_CUSTOM/macos.zsh
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias cors='open -n -a /Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser --args --user-data-dir="/tmp/brave_dev_sess_1" --disable-web-security'

# Git
alias gcl="git clone"
alias gf="git fetch"
alias gs="git status"
alias gpl="git pull"
alias gps="git push"
alias gpsf="git push --force-with-lease"
alias gri="git rebase -i"
alias gcm="git commit -m"
alias gcme="git commit --allow-empty -m"
alias gck="git checkout"
alias gckn="git checkout -b"
alias gckb="git checkout -b"
alias gl="git log --oneline"
alias glg="git log --graph --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%an%C(reset)%C(bold yellow)%d%C(reset) %C(dim white)- %s%C(reset)' --all"
alias gaa="git add ."
alias gb="git branch"
alias gbc="git branch --show-current | tr -d '\n' | pbcopy"
alias gstp="git stash pop"
alias lg="lazygit"
alias lg="lazygit"

# Docker
alias dps="docker ps"
alias dpsa="docker ps -a"
alias dim="docker images"
alias dima="docker images -a"
alias dl="docker logs"
alias dlf="docker logs -f"
alias dst="docker stop"
alias drmc="docker rm"
alias drmi="docker rmi"

# Systems
alias n="cd"
alias b="cd .."
alias cl="clear"
alias cla="clear -a"
alias cdp="cd "$HOME/Projects""
alias cdpr="cd "$HOME/Projects""
alias sz="source ~/.zshrc && echo \"Sourced.\""
alias cpp="pwd | pbcopy"
alias kpa="kp 8000; kp 5000; kp 3000; kp 3001; kp 8080"
alias cc="code ."
alias ll="ls -a"
alias la="ls -la --color"
alias grep="grep --color"
# alias ls="ls --color"

alias ll='colorls -lA --sd --group-directories-first'
alias ls='colorls --group-directories-first'

alias tree='tree --gitignore'

alias oz="code ~/.zshrc"
alias oc="code ~/.config"

# Aliases for file operations
alias cpf='cp -v'
alias mvf='mv -v'
alias rename='mv -v'
alias nfi='touch'
alias nfo='mkdir -p'

# copy content or file
function cpc() {
    if [[ -f $1 ]]; then
        cat "$1" | pbcopy
        echo "Content of $1 copied to clipboard."
    else
        echo "File not found: $1"
    fi
}

# Neovim
alias v="nvim ."
alias vc="nvim"
alias zz="zellij"

# Node
alias y="yarn install"
alias yi="yarn install"
alias yinocypress="CYPRESS_INSTALL_BINARY=0 yarn install"
alias ys="yarn start"
alias yd="yarn dev"
alias ydb="yarn debug"
alias ytwnc="yarn test --watch --no-coverage"
alias ytwc="yarn test --watch --coverage"
alias yt="yarn test"
alias yts="yarn test -u"
alias ysnt="yarn start-metro-bundle"
alias yl="yarn list"
alias yw="yarn why"
alias ytd="yarn test:debug"

# Vim alias
alias lv="lvim"
alias lvo="lvim ."
alias ff="fzf"

# Usage example:
# kp 3000 8000 5000 ...
function kp() {
    if [ $# -eq 0 ]; then
        echo "Usage: kill_ports <port1> [port2] [port3] ..."
        return 1
    fi

    for port in "$@"
    do
        if ! [[ "$port" =~ ^[0-9]+$ ]]; then
            echo "Error: '$port' is not a valid port number."
            continue
        fi

        pid=$(lsof -ti :$port)
        if [ -z "$pid" ]; then
            echo "No process found running on port $port"
        else
            echo "Killing process $pid running on port $port"
            kill -9 $pid
        fi
    done
}

# Usage example:
# grb old_branch_name new_branch_name
function grb() {
    if [ $# -ne 2 ]; then
        echo "Usage: git_rename_branch <old_branch_name> <new_branch_name>"
        return 1
    fi

    old_branch=$1
    new_branch=$2

    # Check if the old branch exists
    if ! git show-ref --verify --quiet refs/heads/$old_branch; then
        echo "Error: Branch '$old_branch' does not exist."
        return 1
    fi

    # Rename the local branch
    git branch -m $old_branch $new_branch

    # Check if the branch is tracked remotely
    if git ls-remote --exit-code --heads origin $old_branch > /dev/null 2>&1; then
        # Push the new branch, reset the upstream branch and delete the old branch
        git push origin -u $new_branch
        git push origin --delete $old_branch
    else
        echo "Note: '$old_branch' was not tracked remotely. Only local branch has been renamed."
    fi

    echo "Branch '$old_branch' has been renamed to '$new_branch'."
}

function lk {
  cd "$(walk "$@")"
}

# Removing all nested folder with the name provided
function rmf() {
  local folder_name="$1"
  local flag="$2"

  if [[ "$flag" == "-r" ]]; then
    # Remove all nested folders with the name provided
    find . -name "$folder_name" -type d -prune -print -exec rm -rf '{}' \;
  else
    # Remove only the current folder(s) matching the name in the current directory
    find . -maxdepth 1 -name "$folder_name" -type d -print -exec rm -rf '{}' \;
  fi
}


LS_COLORS='di=1:fi=0:ln=31:pi=5:so=5:bd=5:cd=5:or=31:mi=0:ex=36:*.rpm=90'
export LS_COLORS

export PATH=$PATH:$HOME/bin

function rnzz() {
    if [[ -n $ZELLIJ ]]; then
        name="$1"
        if [[ -n $name ]]; then
            tab_name=${name}
        elif git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
            tab_name=$(basename "$(git rev-parse --show-toplevel)")/
            tab_name+=$(git rev-parse --show-prefix)
            tab_name=${tab_name%/}
        else
            tab_name=$PWD
            if [[ $tab_name == $HOME ]]; then
                tab_name="~"
            else
                tab_name=${tab_name##*/}
            fi
        fi
        nohup zellij action rename-tab "$tab_name" >/dev/null 2>&1
    fi
}