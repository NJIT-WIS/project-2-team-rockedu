FROM node:18

# Configure apt
ENV DEBIAN_FRONTEND=noninteractive

# Install basic development tools
RUN apt update && \
    apt install -y less man-db sudo \
    zsh \
    wget 

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Persist zsh history
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.zsh_history && export HISTSIZE=100000" \
    && mkdir /commandhistory \
    && touch /commandhistory/.zsh_history \
    && chown -R $USERNAME /commandhistory \
    && echo "$SNIPPET" >> "/home/$USERNAME/.zshrc"

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Set the default shell to bash rather than sh
ENV SHELL /bin/zsh

# specify the Oh My Zsh version string
ARG OMZ_VERSION=master

USER ${USERNAME}

# run the installation script  
RUN BRANCH=${OMZ_VERSION} \
    ZSH=/home/$USERNAME/.oh-my-zsh \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/${OMZ_VERSION}/tools/install.sh)" "" \
    --unattended

# Installing extensions
# install zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-/home/$USERNAME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions | zsh
# install zsh-syntax-highlighting
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-/home/$USERNAME/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
# install zsh-completions
RUN git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-/home/$USERNAME/.oh-my-zsh/custom}/custom}/plugins/zsh-completions

# zsh configuration
ADD .zshrc $HOME

#  Install dependencies for project
RUN sudo apt update && \
    sudo apt-get install -y libgbm-dev && \
    sudo npm install -g lighthouse chrome-launcher axe-core chromium wait-on playwright@1.32.1 && \
    sudo apt install -y chromium && \
    npx playwright install --with-deps chromium
