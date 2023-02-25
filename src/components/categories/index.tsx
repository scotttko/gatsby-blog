import * as S from './styles'

interface CategoryProps {
  categories: string[]
  category: string
  switchCategory: (newCategory: string) => void
}

const Categories = ({ categories, category, switchCategory }: CategoryProps) => {
  return (
    <S.CategoryWrapper>
      {categories.map((item) => (
        <S.CategoryItem
          key={item}
          selected={item === category}
          onClick={() => switchCategory(item)}
        >
          {item}
        </S.CategoryItem>
      ))}
    </S.CategoryWrapper>
  )
}

export default Categories
