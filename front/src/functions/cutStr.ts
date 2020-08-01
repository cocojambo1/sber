export const cutStr = ( str: string, len: number ): string => {
  str = str.trim()

  if ( str.length <= len )
    return str
  else {
    str = str.slice( 0, len )

    return str.trim() + "..."
  }
}