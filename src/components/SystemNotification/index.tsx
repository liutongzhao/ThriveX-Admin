import { Modal, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const SHOW_NOTIFICATION_KEY = 'show_login_notification';
const GITHUB_URL = 'https://github.com/liutongzhao';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default ({ open, onClose }: Props) => {
  // 关闭通知框
  const handleClose = () => {
    localStorage.removeItem(SHOW_NOTIFICATION_KEY);
    onClose();
  };

  // 跳转到 GitHub
  const handleGoToGitHub = () => {
    window.open(GITHUB_URL, '_blank');
  };

  return (
    <Modal title="📢 系统通知" open={open} onCancel={handleClose} footer={null} width={600} className="login-notification-modal">
      <div className="py-4">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">⭐ 欢迎来到 Cuz</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              如果这个项目对你有帮助，欢迎在 GitHub 上给我们一个 Star！
              <br />
              你的支持是我们持续更新的最大动力 🚀
            </p>
          </div>

          <div className="pt-2">
            <Button
              type="primary"
              size="large"
              icon={<GithubOutlined />}
              onClick={handleGoToGitHub}
              style={{
                height: '48px',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              前往 GitHub 点 Star
            </Button>
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Cuz 用于记录技术、思考与生活</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// 导出工具函数：设置显示通知标记
export const setShowLoginNotification = () => {
  localStorage.setItem(SHOW_NOTIFICATION_KEY, 'true');
};

// 导出工具函数：检查是否需要显示通知
export const shouldShowLoginNotification = (): boolean => {
  return localStorage.getItem(SHOW_NOTIFICATION_KEY) === 'true';
};
