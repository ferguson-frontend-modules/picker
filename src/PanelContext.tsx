import * as React from 'react';
import type { OnSelect, PanelMode } from './interface';
import type { HeaderProps } from './panels/Header';

export type ContextOperationRefProps = {
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => boolean;
  onClose?: () => void;
};

export type PanelContextProps = {
  operationRef?: React.MutableRefObject<ContextOperationRefProps | null>;
  /** Only work with time panel */
  hideHeader?: boolean;
  panelRef?: React.Ref<HTMLDivElement>;
  hidePrevBtn?: boolean;
  hideNextBtn?: boolean;
  onDateMouseEnter?: (date: any) => void;
  onDateMouseLeave?: (date: any) => void;
  onSelect?: OnSelect<any>;
  hideRanges?: boolean;
  open?: boolean;
  mode?: PanelMode;

  /** Only used for TimePicker and this is a deprecated prop */
  defaultOpenValue?: any;
  headRender?: (
    originHead: React.ReactNode,
    handlers: Pick<HeaderProps, 'onPrev' | 'onSuperPrev' | 'onNext' | 'onSuperNext'>,
  ) => React.ReactNode;
};

const PanelContext = React.createContext<PanelContextProps>({});

export default PanelContext;
