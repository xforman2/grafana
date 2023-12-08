import { css } from '@emotion/css';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';

import { Slider, Tooltip } from '@grafana/ui';

interface Props {
  onResolutionChange(resolution: number): void;
  rows: number;
}

export const LogResolutionPicker = ({ rows, onResolutionChange }: Props) => {
  const [currentValue, setCurrentValue] = useState(9);
  const debouncedOnChange = debounce(onResolutionChange);
  const onChange = useCallback(
    (value: number) => {
      setCurrentValue(value);
      value = 10 - value;
      const resolution = Math.ceil((rows * (10 - value)) / 10);
      debouncedOnChange(resolution);
      
    },
    [debouncedOnChange, rows]
  );
  if (!rows) {
    return null;
  }
  return (
    <Tooltip content="Resolution: render more or less log lines">
      <div className={styles.slider}>
        <Slider min={1} max={9} value={currentValue} onChange={onChange} />
      </div>
    </Tooltip>
  );
};

const styles = {
  slider: css({
    paddingRight: '.5em',
    paddingBottom: '.5em',
    display: 'flex',
    '.rc-slider + div': {
      display: 'none',
    },
  }),
};
