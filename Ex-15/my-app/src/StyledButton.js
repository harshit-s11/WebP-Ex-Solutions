export default function StyledButton() {
    const style = {
      backgroundColor: 'skyblue',
      padding: '12px 24px',
      fontSize: '18px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '20px'
    }
    
    return <button style={style}>Click Me</button>
}