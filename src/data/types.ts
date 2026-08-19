export interface PortfolioItem {
  id: string;
  titleAz: string;
  titleEn: string;
  category: 'web' | 'software';
  isExample: boolean;
  descriptionAz: string;
  descriptionEn: string;
  featuresAz: string[];
  featuresEn: string[];
  technologies: string[];
  screenshot: string;
  color: string;
}
