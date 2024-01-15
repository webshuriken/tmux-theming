export interface Clock {
  colour: string;
  format: string;
}

export interface Panes {
  activePaneColour: {
    text: string;
    bg: string;
  };
  inactivePaneColour: {
    text: string;
    bg: string;
  };
  borderIndicator: string;
  borderLines: string;
  activeBorderColour: {
    text: string;
    bg: string;
  };
  borderColour: {
    text: string;
    bg: string;
  };
}

export interface Popup {
  containerColour: {
    text: string;
    bg: string;
  };
  borderLines: string;
  borderColour: {
    text: string;
    bg: string;
  };
}

export interface Prompt {
  colour: {
    text: string;
    bg: string;
  };
}

export interface session {
  windowRows: {
    baseIndex: string;
    colour: {
      text: string;
      bg: string;
    };
  };
  panes: {
    baseIndex: string;
    colour: {
      default: string;
      active: string;
    };
  };
}

export interface StatusBar {
  status: string;
  position: string;
  colour: {
    text: string;
    bg: string;
  };
  leftSide: {
    format: string;
    maxChars: string;
    colour: {
      text: string;
      bg: string;
    };
    rightSide: {
      format: string;
      maxChars: string;
      colour: {
        text: string;
        bg: string;
      };
    };
    listOfWindows: {
      justify: string;
      separator: string;
      allowCustomDefaultName: string;
      defaultName: string;
      activeDefaultName: string;
      activeColour: {
        text: string;
        bg: string;
      };
      inactiveDefaultName: string;
      inactiveColour: {
        text: string;
        bg: string;
      };
    };
  };
}

export interface Settings {
  clock: Clock;
  panes: Panes;
  popup: Popup;
  prompt: Prompt;
  session: session;
  statusBar: StatusBar;
}
