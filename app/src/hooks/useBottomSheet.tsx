import React, { Ref, FC, useRef, useCallback, useMemo } from 'react'
import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

const defaultSnapPoints = [1, '90%']
export const useBottomSheet = (snapPointsOverride?: (string | number)[]) => {
  const snapPoints = snapPointsOverride || defaultSnapPoints
  const bottomSheetRef = useRef<BottomSheet>(null)

  const openSheet = useCallback(() => {
    bottomSheetRef?.current?.expand()
  }, [])

  const closeSheet = useCallback(() => {
    bottomSheetRef?.current?.close()
  }, [])

  const Sheet: FC = useMemo(
    () =>
      ({ children }) =>
        (
          <Portal>
            <BottomSheet enablePanDownToClose ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
              {children}
            </BottomSheet>
          </Portal>
        ),
    [snapPoints]
  )

  return {
    Sheet,
    openSheet,
    closeSheet,
    bottomSheetRef,
  }
}

interface SheetProps {
  ref: Ref<BottomSheetMethods> | undefined
  snapPoints: BottomSheetProps['snapPoints']
}
export const ComponentSheet: FC<SheetProps> = ({ children, ref, snapPoints }) => (
  <Portal>
    <BottomSheet enablePanDownToClose ref={ref} index={-1} snapPoints={snapPoints}>
      {children}
    </BottomSheet>
  </Portal>
)
