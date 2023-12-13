import React from 'react'
import { View, ViewProps } from "react-native";
import { Matrix } from 'concat-color-matrices'
import NativeColorMatrixImageFilter from './CMIFColorMatrixImageFilterNativeComponent'
import { defaultStyle, checkStyle } from './style'
import clamp from "clamp"
const filters = {
  grayscale: (v = 1): Matrix => {
    const cv = clamp(1 - v, 0, 1)
    return [
      0.2126 + 0.7874 * cv, 0.7152 - 0.7152 * cv, 0.0722 - 0.0722 * cv, 0, 0,
      0.2126 - 0.2126 * cv, 0.7152 + 0.2848 * cv, 0.0722 - 0.0722 * cv, 0, 0,
      0.2126 - 0.2126 * cv, 0.7152 - 0.7152 * cv, 0.0722 + 0.9278 * cv, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
}

type FilterProps = ViewProps & {
  readonly amount?: number
}

export const Grayscale = React.forwardRef(
  ({ amount, ...props }: FilterProps, ref: React.Ref<View>) => (
    <ColorMatrixImageFilter matrix={filters.grayscale(amount)} ref={ref} {...props} />
  )
)

export const ColorMatrixImageFilter = React.forwardRef(function ColorMatrixImageFilter(
  {
    style,
    ...restProps
  }: ViewProps & {
    readonly matrix: Matrix
  },
  ref: React.Ref<View>
) {
  checkStyle(style)

  return (
    <NativeColorMatrixImageFilter
      style={[defaultStyle.container, style]}
      {...restProps}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      ref={ref}
    />
  )
})