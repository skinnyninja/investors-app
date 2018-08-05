import React from 'react';

// tslint:disable-next-line:interface-name
interface ErrorBoundaryProps {
  children: object;
}

// tslint:disable-next-line:interface-name
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{

  constructor (props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch (error: any, info: any) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render () {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
