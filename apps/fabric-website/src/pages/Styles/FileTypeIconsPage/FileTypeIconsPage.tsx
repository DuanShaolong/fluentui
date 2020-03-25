import * as React from 'react';
import { Icon, Link } from 'office-ui-fabric-react';
import { getFileTypeIconProps } from '@uifabric/file-type-icons';
import { Markdown, MarkdownHeader, IPageSectionProps } from '@uifabric/example-app-base/lib/index2';
import { IStylesPageProps, StylesAreaPage } from '../StylesAreaPage';
import { FileTypeIconsPageProps } from './FileTypeIconsPage.doc';
import { Platforms } from '../../../interfaces/Platforms';
import * as styles from './FileTypeIconsPage.module.scss';

const baseUrl =
  'https://github.com/microsoft/fluentui/tree/master/apps/fabric-website/src/pages/Styles/FileTypeIconsPage/docs';
const fabricCDN = 'https://static2.sharepointonline.com/files/fabric/assets';

const productIcons = require('@uifabric/fabric-website/lib/data/brand-icons-products.json');
const documentIcons = require('@uifabric/fabric-website/lib/data/brand-icons-documents.json');
const monochromeIcons = require('@uifabric/fabric-website/lib/data/brand-icons-monochrome.json');

export const FileTypeIconsPage: React.FunctionComponent<IStylesPageProps> = props => {
  const { platform } = props;
  return (
    <StylesAreaPage
      {...props}
      {...FileTypeIconsPageProps[platform]}
      otherSections={_otherSections(platform) as IPageSectionProps[]}
    />
  );
};

function _otherSections(platform: Platforms): IPageSectionProps<Platforms>[] {
  switch (platform) {
    case 'web':
      return [
        {
          sectionName: 'Overview',
          editUrl: `${baseUrl}/web/FileTypeIconsOverview.md`,
          content: (
            <>
              <Markdown>
                {
                  require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FileTypeIconsPage/docs/web/FileTypeIconsOverview.md') as string
                }
              </Markdown>

              <MarkdownHeader as="h3">When should I use File type icons?</MarkdownHeader>
              <div className="ms-Grid">
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-sm12 ms-lg6">
                    <p>
                      Use file type icons to indicate to users that they are creating a new file of that type. Make sure
                      that a file of the type that the icon represents loads when the user selects the icon. For
                      example, do not use a Word .docx icon to open a .txt file. File type icons should always represent
                      Microsoft Office files.
                      <br />
                      <br />
                      If you are looking for icons for command bars, navigation, status indicators, or similar, check
                      out the <Link href="#/styles/web/icons">Fluent UI icons page</Link>. Alternatively, if you're
                      looking for brand logos, or the icons of apps themselves, check out the{' '}
                      <Link href="#/styles/web/office-brand-icons">Fluent UI brand icons page</Link>.
                    </p>
                  </div>
                  <div className="ms-Grid-col ms-sm12 ms-lg6">
                    <ul className={styles.exampleIcons}>
                      <li>
                        <Icon
                          aria-label="Word file icon"
                          className={styles.productIcon}
                          {...getFileTypeIconProps({ extension: 'docx', size: 96, imageFileType: 'svg' })}
                        />
                      </li>
                      <li>
                        <Icon
                          aria-label="Excel file icon"
                          className={styles.productIcon}
                          {...getFileTypeIconProps({ extension: 'xlsx', size: 96, imageFileType: 'svg' })}
                        />
                      </li>
                      <li>
                        <Icon
                          aria-label="PowerPoint file icon"
                          className={styles.productIcon}
                          {...getFileTypeIconProps({ extension: 'pptx', size: 96, imageFileType: 'svg' })}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ),
        },
        {
          sectionName: 'Format and sizes',
          editUrl: `${baseUrl}/web/FileTypeIconsFormat.md`,
          content: (
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-lg6">
                  <Markdown>
                    {
                      require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FileTypeIconsPage/docs/web/FileTypeIconsFormat.md') as string
                    }
                  </Markdown>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-lg6">
                  <ul className={styles.exampleIcons}>
                    <li>
                      <Icon {...getFileTypeIconProps({ extension: 'vsdx', size: 16, imageFileType: 'svg' })} />
                      <span>16px</span>
                    </li>
                    <li>
                      <Icon {...getFileTypeIconProps({ extension: 'vsdx', size: 32, imageFileType: 'svg' })} />
                      <span>32px</span>
                    </li>
                    <li>
                      <Icon {...getFileTypeIconProps({ extension: 'vsdx', size: 48, imageFileType: 'svg' })} />
                      <span>48px</span>
                    </li>
                    <li>
                      <Icon {...getFileTypeIconProps({ extension: 'vsdx', size: 96, imageFileType: 'svg' })} />
                      <span>96px</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ),
        },
        {
          sectionName: 'Implementation',
          editUrl: `${baseUrl}/web/FileTypeIconsImplementation.md`,
          content: (
            <Markdown>
              {
                require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FileTypeIconsPage/docs/web/FileTypeIconsImplementation.md') as string
              }
            </Markdown>
          ),
        },

        {
          sectionName: 'File-type icon examples',
          content: (
            <>
              <ul className={styles.iconList}>
                {documentIcons.map((icon, iconIndex) => (
                  <li key={iconIndex}>
                    <Icon
                      {...getFileTypeIconProps({ extension: icon.name, size: 48, imageFileType: 'svg' })}
                      className={styles.icon}
                      role="presentation"
                    />
                    <span className={styles.iconName}>{icon.name}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
      ];

    default:
      return [];
  }
}
