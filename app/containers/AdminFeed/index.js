/*
 * AdminFeed
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';


export default class AdminFeed extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <p><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
     
      </div>
    );
  }
}
