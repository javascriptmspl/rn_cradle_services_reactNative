import {registerSheet} from 'react-native-actions-sheet';

import CameraAndGalleryOption from './CameraAndGalleryOption';
import GenderSelectSheet from './GenderSelectSheet';
import PremiumMembershipSheet from './PremiumMemershiupSheet';
import ItemCustomiseSheet from './ItemCustomiseSheet';
import IdProofSheet from './IdProofSheet';

export const SHEETS = {
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  GenderSelectSheet: 'GenderSelectSheet',
  ItemCustomiseSheet: 'ItemCustomiseSheet',
  PremiumMembershipSheet: 'PremiumMembershipSheet',
  IdProofSheet: 'IdProofSheet',
};

registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
registerSheet(SHEETS.ItemCustomiseSheet, ItemCustomiseSheet);
registerSheet(SHEETS.PremiumMembershipSheet, PremiumMembershipSheet);
registerSheet(SHEETS.IdProofSheet, IdProofSheet);
