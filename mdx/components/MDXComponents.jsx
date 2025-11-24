// Reusable MDX Components for ISTP-A BOS Manual

export const HighlightBox = ({ title, children }) => (
  <div className="highlight-box">
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

export const ConceptBox = ({ title, children }) => (
  <div className="concept-box">
    {title && <strong>{title}</strong>}
    {children}
  </div>
);

export const CaseStudy = ({ title, children }) => (
  <div className="case-study">
    {title && <h4>{title}</h4>}
    {children}
  </div>
);

export const Framework = ({ steps }) => (
  <div className="framework">
    <div className="framework-steps">
      {steps.map((step, index) => (
        <>
          <div key={step} className="framework-step">
            {step}
          </div>
          {index < steps.length - 1 && (
            <div key={`arrow-${index}`} className="framework-arrow">
              →
            </div>
          )}
        </>
      ))}
    </div>
  </div>
);

export const PriorityDimensions = () => (
  <div className="concept-box">
    <strong>Priority OS 五维评分系统</strong>
    <ul>
      <li>
        <strong>不作为的代价（Cost of Inaction）</strong> -
        如果这个项目再拖延，会不会带来明显损失（deadline、签证、毕业、健康、收入等）
      </li>
      <li>
        <strong>系统依赖程度（Dependency）</strong> -
        这个项目是否是其他任务的前置条件（例如论文的 Baseline 是后续所有实验与写作的基础）
      </li>
      <li>
        <strong>回报或杠杆（Return / Leverage）</strong> -
        完成这个项目是否会为未来解锁更多选项或能力
      </li>
      <li>
        <strong>可见反馈（Visibility）</strong> -
        推进这个项目时，你是否能很快看到成果，从而获得 Se 的动力
      </li>
      <li>
        <strong>启动阻力（Friction）</strong> -
        你现在是否容易开始，还是一想到就感觉头大（反向指标）
      </li>
    </ul>
  </div>
);

export const BosStep = ({ step, title, children }) => (
  <div className="bos-step">
    <div className="bos-step-header">
      <span className="bos-step-label">{step}</span>
      <h4>{title}</h4>
    </div>
    <div className="bos-step-content">{children}</div>
  </div>
);

// Component styles (can be imported separately or included inline)
export const componentStyles = `
  .highlight-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .highlight-box h3 {
    color: white;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .concept-box {
    background: #f0f7ff;
    border-left: 4px solid #3498db;
    padding: 1.5rem;
    border-radius: 6px;
    margin: 1.5rem 0;
  }

  .concept-box strong {
    color: #3498db;
    display: block;
    margin-bottom: 0.75rem;
  }

  .case-study {
    background: #fff9f0;
    border-left: 4px solid #ff9800;
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 6px;
  }

  .case-study h4 {
    color: #ff9800;
    margin-bottom: 1rem;
  }

  .framework {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    text-align: center;
  }

  .framework-steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .framework-step {
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    color: #2c3e50;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    flex: 1;
    min-width: 120px;
  }

  .framework-arrow {
    color: #3498db;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .bos-step {
    margin: 2rem 0;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #e1e4e8;
  }

  .bos-step-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .bos-step-label {
    background: #3498db;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .bos-step-content {
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    .framework-steps {
      flex-direction: column;
    }

    .framework-arrow {
      transform: rotate(90deg);
    }
  }
`;
