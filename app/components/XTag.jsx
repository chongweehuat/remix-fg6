const XTag = ({
    tag: Tag = 'div',
    useCss = false,
    styleClass = '', // renamed css to styleClass
    cmsData = '', // renamed data to cmsData
    cmsDataRef = '', // renamed dataRef to cmsDataRef
    children,
    ...rest
  }) => {
    // Clean up the cmsData string to replace special characters
    const cleanData = cmsData.replace(/&nbsp;/g, ' ').replace(/\xa0/g, ' ');
  
    // Determine className logic:
    // 1. Use `cmsData` if it exists and `useCss` is false (default).
    // 2. If `useCss` is true, use `styleClass` even if `cmsData` exists.
    // 3. If `cmsData` is empty, fallback to `styleClass`.
    const className = useCss && styleClass
      ? styleClass  // If useCss is true and styleClass exists, use styleClass
      : cleanData || styleClass;  // Otherwise, use cleanData (cmsData) or fallback to styleClass if cmsData is empty
  
    // Determine attributes to be passed to the HTML tag
    const tagProps = {
      className: className || undefined,
      'data-ref': cmsData && cmsDataRef && !useCss ? cmsDataRef : undefined,
      ...rest
    };
  
    // If both className and children are empty, return an empty fragment (nothing)
    if (!className && !children) {
      return <></>;
    }
  
    // If className is empty but children exist, render only the children (no wrapper)
    if (!className && children) {
      return <>{children}</>;
    }
  
    // If Tag is a function (React component), render it with className and data-ref
    if (!children && typeof Tag === 'function') {
      return <Tag {...tagProps} />;
    }
  
    // For HTML elements or cases with children, render the wrapper only if className exists
    return className ? <Tag {...tagProps}>{children}</Tag> : <>{children}</>;
  };
  
  export default XTag;
  