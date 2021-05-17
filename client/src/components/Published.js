import PropTypes from 'prop-types';
import {
  Content,
  ContentDescription,
  ContentItem,
  ContentList,
} from '../styles/Styles';

const Published = ({ _createdAt }) => (
  <>
    <Content>
      <ContentDescription>Publisert:</ContentDescription>
      <ContentList>
        <ContentItem>
          {new Date(_createdAt).toLocaleDateString('no', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            time: '',
          })}
        </ContentItem>
      </ContentList>
    </Content>
  </>
);

Published.propTypes = {
  _createdAt: PropTypes.string,
};

export default Published;
