interface IMobileDropdownControlsProps {
  onClose: () => void
}

export const MobileDropdownControls = (props: IMobileDropdownControlsProps) => {
  const onClick = () => props.onClose()

  return (
    <>
      <div className="mobileDropdownControls mobile">
        <button className="buttonMinor" onClick={onClick}>close</button>
      </div>
      <hr className="mobile" />
    </>
  )
}
