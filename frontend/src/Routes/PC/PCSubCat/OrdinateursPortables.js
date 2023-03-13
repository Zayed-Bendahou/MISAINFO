import { ProductConatinerDataSubCat } from '../../../components/Productspage/ProductContainerDataSubCat';

const OrdinateursPortables = ({ OrdinateursPortablesData }) => {
  const subcat = 'Ordinateurs Portables';
  return (
    <div className="my-20">
      <div className="grid grid-flow-row grid-cols-1 md:grid-clos-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-4">
        <ProductConatinerDataSubCat 
          Data={OrdinateursPortablesData}
          subcat={subcat}
        />
      </div>
    </div>
  );
};
export default OrdinateursPortables;
