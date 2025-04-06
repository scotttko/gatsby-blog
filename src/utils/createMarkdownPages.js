async function createMarkdownPages({
  graphql,
  createPage,
  reporter,
  folderRegex,
  templatePath,
  slugPrefix = '',
  limit = 1000,
  enablePagination = false,
}) {
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "${folderRegex}" } }
        sort: { frontmatter: { date: ASC } }
        limit: ${limit}
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            categories
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error loading markdown files for ${folderRegex}`, result.errors);
    return;
  }

  const items = result.data.allMarkdownRemark.nodes;

  const filteredItems = items.filter(
    (node) => node.frontmatter.title !== 'resume' && !node.frontmatter.categories?.includes('test')
  );

  console.log({ filteredItems });

  filteredItems.forEach((item, index) => {
    const previousId = enablePagination && index !== 0 ? filteredItems[index - 1].id : null;
    const nextId =
      enablePagination && index !== filteredItems.length - 1 ? filteredItems[index + 1].id : null;

    createPage({
      path: `${slugPrefix}${item.fields.slug}`,
      component: templatePath,
      context: {
        id: item.id,
        ...(enablePagination && { previousPostId: previousId, nextPostId: nextId }),
      },
    });
  });
}

module.exports = createMarkdownPages;
